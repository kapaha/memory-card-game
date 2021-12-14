import React from 'react';
import classes from './GameOver.module.css';

export default function GameOver({ currentScore }) {
    return (
        <div className={classes.container}>
            <h1 className={classes.gameOver}>Game Over</h1>
            <h2 className={classes.score}>Score: {currentScore}</h2>
            <button className={classes.btn}>New Game</button>
        </div>
    );
}
