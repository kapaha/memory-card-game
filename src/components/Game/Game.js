import React from 'react';
import { useSquishmallows, useScoreboard } from '../../hooks';
import CardGrid from './CardGrid';
import Scoreboard from './Scoreboard';
import classes from './Game.module.css';

export default function Game() {
    const { activeSquishmallows, shuffleDeck } = useSquishmallows(4);
    const { currentScore, bestScore } = useScoreboard();
    return (
        <main className={classes.container}>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <CardGrid
                squishmallows={activeSquishmallows}
                shuffleDeck={shuffleDeck}
            />
        </main>
    );
}
