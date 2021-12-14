import { useState } from 'react';
import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 4;

export default function useGame() {
    const { activeCards, shuffleDeck, getNewCards } = useCards(
        STARTING_CARDS_AMOUNT
    );
    const {
        currentScore,
        bestScore,
        incrementCurrentScore,
        resetCurrentScore,
    } = useScoreboard();

    const [isGameOver, setIsGameOver] = useState(false);

    function handleCardClick(card) {
        if (card.hasBeenPicked) {
            setIsGameOver(true);
            return;
        }

        card.hasBeenPicked = true;
        incrementCurrentScore();
        shuffleDeck();
    }

    function resetGame() {
        resetCurrentScore();
        setIsGameOver(false);
        getNewCards();
    }

    return {
        activeCards,
        currentScore,
        bestScore,
        handleCardClick,
        isGameOver,
        resetGame,
    };
}
