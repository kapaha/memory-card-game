import { useState } from 'react';

export default function useScoreboard() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function incrementCurrentScore() {
        setCurrentScore((prevState) => (prevState += 1));

        if (currentScore + 1 > bestScore) setBestScore(currentScore + 1);
    }

    function resetCurrentScore() {
        setCurrentScore(0);
    }

    return {
        currentScore,
        bestScore,
        incrementCurrentScore,
        resetCurrentScore,
    };
}
