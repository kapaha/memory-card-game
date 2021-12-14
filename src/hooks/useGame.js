import { useState } from 'react';
import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 4;
const MAX_CARDS_AMOUNT = 5;

export default function useGame() {
    const [isGameOver, setIsGameOver] = useState(false);
    const [pickedCardCount, setPickedCardCount] = useState(0);
    const [cardsAmount, setCardsAmount] = useState(STARTING_CARDS_AMOUNT);
    const [currentLevel, setCurrentLevel] = useState(1);

    const { activeCards, shuffleDeck, getNewCards, resetPickedCards } =
        useCards(cardsAmount);
    const {
        currentScore,
        bestScore,
        incrementCurrentScore,
        resetCurrentScore,
    } = useScoreboard();

    function handleCardClick(card) {
        if (card.hasBeenPicked) {
            setIsGameOver(true);
            return;
        }

        card.hasBeenPicked = true;
        setPickedCardCount((prevState) => (prevState += 1));
        incrementCurrentScore();

        if (pickedCardCount + 1 >= activeCards.length) {
            levelUp();
            console.log('Level Up');
        }

        shuffleDeck();
    }

    function levelUp() {
        setPickedCardCount(0);
        resetPickedCards();
        setCurrentLevel((prevState) => (prevState += 1));

        if (cardsAmount + 1 <= MAX_CARDS_AMOUNT) {
            setCardsAmount((prevState) => (prevState += 1));
        }
    }

    function resetGame() {
        resetCurrentScore();
        setPickedCardCount(0);
        setCardsAmount(STARTING_CARDS_AMOUNT);
        setCurrentLevel(1);
        getNewCards();
        setIsGameOver(false);
    }

    return {
        activeCards,
        currentScore,
        bestScore,
        handleCardClick,
        isGameOver,
        resetGame,
        currentLevel,
    };
}
