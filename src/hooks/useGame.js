import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 4;

export default function useGame() {
    const { activeCards, shuffleDeck } = useCards(STARTING_CARDS_AMOUNT);
    const { currentScore, bestScore, incrementCurrentScore } = useScoreboard();

    function handleCardClick(card) {
        if (card.hasBeenPicked) return;

        card.hasBeenPicked = true;
        incrementCurrentScore();
        shuffleDeck();
    }

    return {
        activeCards,
        currentScore,
        bestScore,
        handleCardClick,
    };
}
