import React from 'react';
import classes from './Scoreboard.module.css';

export default function Scoreboard({ currentScore, bestScore }) {
    return (
        <>
            <p className={`${classes.score} ${classes.currentScore}`}>
                Score: {currentScore}
            </p>
            <p className={`${classes.score} ${classes.bestScore}`}>
                Best Score: {bestScore}
            </p>
        </>
    );
}
