import { useState } from 'react';
import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 3;
const MAX_CARDS_AMOUNT = 9;

const GAME_STATES = {
    SHOW_INSTRUCTIONS: 'SHOW_INSTRUCTIONS',
    PLAYING: 'PLAYING',
    GAME_OVER: 'GAME_OVER',
};

export default function useGame() {
    const [cardsAmount, setCardsAmount] = useState(STARTING_CARDS_AMOUNT);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [pickedCardCount, setPickedCardCount] = useState(0);

    const [gameState, setGameState] = useState(GAME_STATES.SHOW_INSTRUCTIONS);

    const { activeCards, shuffleDeck, getNewCards, pickCard, unpickAllCards } =
        useCards(cardsAmount);
    const {
        currentScore,
        bestScore,
        incrementCurrentScore,
        resetCurrentScore,
    } = useScoreboard();

    function handlePickCard(card) {
        pickCard(card);
        setPickedCardCount((prevState) => (prevState += 1));
    }

    function levelUp() {
        setPickedCardCount(0);
        unpickAllCards();
        setCurrentLevel((prevState) => (prevState += 1));

        if (cardsAmount + 1 <= MAX_CARDS_AMOUNT) {
            setCardsAmount((prevState) => (prevState += 1));
        } else {
            getNewCards();
        }
    }

    function handleCardClick(card) {
        if (card.hasBeenPicked) {
            setGameState(GAME_STATES.GAME_OVER);
            return;
        }

        handlePickCard(card);
        incrementCurrentScore();

        const allCardsPicked = pickedCardCount + 1 >= activeCards.length;
        if (allCardsPicked) levelUp();

        shuffleDeck();
    }

    function resetGame() {
        resetCurrentScore();
        setPickedCardCount(0);
        setCardsAmount(STARTING_CARDS_AMOUNT);
        setCurrentLevel(1);
        getNewCards();
        setGameState(GAME_STATES.PLAYING);
    }

    function toggleInstructions() {
        setGameState((prev) =>
            prev === GAME_STATES.SHOW_INSTRUCTIONS
                ? GAME_STATES.PLAYING
                : GAME_STATES.SHOW_INSTRUCTIONS
        );
    }

    return {
        gameState,
        props: {
            instructions: { showInstructions: true, toggleInstructions },
            userInterface: {
                currentLevel,
                currentScore,
                bestScore,
                toggleInstructions,
            },
            cardGrid: { activeCards, handleCardClick },
            gameOver: { currentScore, resetGame },
        },
    };
}
