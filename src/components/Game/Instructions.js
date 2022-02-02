import React from 'react';
import classes from './Instructions.module.css';

export default function Instructions({ toggleInstructions }) {
    return (
        <>
            <div className={classes.overlay} onClick={toggleInstructions}></div>
            <div className={classes.modal}>
                <h1 className={classes.modalTitle}>How To Play</h1>
                <p className={classes.modalText}>
                    Click each card that hasn't been clicked during the current
                    level.
                </p>
                <p className={classes.modalText}>
                    Each correct card that you click will increase your score by
                    1
                </p>
                <p className={classes.modalText}>
                    Clicking a card that you have already clicked will result in
                    game over.
                </p>
                <p className={classes.modalText}>
                    Once each card has been clicked, you will advance to the
                    next level, where the amount of cards will increase.
                </p>
                <button
                    className={`btn ${classes.btn}`}
                    onClick={toggleInstructions}
                >
                    Play
                </button>
            </div>
        </>
    );
}
