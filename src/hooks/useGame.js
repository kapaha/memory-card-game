import { useState } from 'react';
import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 4;

export default function useGame() {
    const { activeCards, shuffleDeck } = useCards(STARTING_CARDS_AMOUNT);
    const { currentScore, bestScore, incrementCurrentScore } = useScoreboard();

    const [isGameOver, setIsGameOver] = useState(false);

    function handleCardClick(card) {
        if (card.hasBeenPicked) {
            setIsGameOver(true);
            gameOver();
            return;
        }

        card.hasBeenPicked = true;
        incrementCurrentScore();
        shuffleDeck();
    }

    function gameOver() {
        console.log('Game Over');
    }

    return {
        activeCards,
        currentScore,
        bestScore,
        handleCardClick,
        isGameOver,
    };
}
