import { useCards, useScoreboard } from '.';

const STARTING_CARDS_AMOUNT = 4;

export default function useGame() {
    const { activeCards, shuffleDeck } = useCards(STARTING_CARDS_AMOUNT);
    const { currentScore, bestScore } = useScoreboard();

    return {
        activeCards,
        shuffleDeck,
        currentScore,
        bestScore,
    };
}
