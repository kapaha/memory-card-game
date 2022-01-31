import React from 'react';
import classes from './GameOver.module.css';

export default function GameOver({ currentScore, resetGame }) {
    return (
        <div className={classes.container}>
            <h1 className={classes.gameOver}>Game Over</h1>
            <h2 className={classes.score}>Score: {currentScore}</h2>
            <button className="btn" onClick={resetGame}>
                New Game
            </button>
        </div>
    );
}
