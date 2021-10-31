import React from 'react';
import useSquishmallows from '../../hooks/useSquishmallows';
import classes from './Game.module.css';
import CardGrid from './CardGrid';

export default function Game() {
    const { activeSquishmallows, shuffleDeck } = useSquishmallows(4);
    return (
        <main className={classes.container}>
            <CardGrid
                squishmallows={activeSquishmallows}
                shuffleDeck={shuffleDeck}
            />
        </main>
    );
}
