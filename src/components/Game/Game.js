import React from 'react';
import { useSquishmallows } from '../../hooks';
import CardGrid from './CardGrid';
import Scoreboard from './Scoreboard';

export default function Game() {
    const { activeSquishmallows, shuffleDeck } = useSquishmallows(4);
    return (
        <main className={classes.container}>
            <Scoreboard currentScore="0" bestScore="0" />
            <CardGrid
                squishmallows={activeSquishmallows}
                shuffleDeck={shuffleDeck}
            />
        </main>
    );
}
