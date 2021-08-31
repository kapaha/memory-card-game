import React from 'react';
import useSquishmallows from '../../hooks/useSquishmallows';
import classes from './Game.module.css';
import CardGrid from './CardGrid';

export default function Game() {
    const activeSquishmallows = useSquishmallows(2);

    return (
        <main className={classes.container}>
            <CardGrid squishmallows={activeSquishmallows} />
        </main>
    );
}
