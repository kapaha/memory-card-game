import { useSquishmallows, useScoreboard } from '.';

export default function useGame() {
    const STARTING_CARDS_AMOUNT = 4;

    const { activeSquishmallows, shuffleDeck } = useSquishmallows(
        STARTING_CARDS_AMOUNT
    );
    const { currentScore, bestScore } = useScoreboard();

    return {
        activeSquishmallows,
        shuffleDeck,
        currentScore,
        bestScore,
    };
}
