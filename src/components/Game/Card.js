import React from 'react';
import classes from './Card.module.css';

export default function Card({ squishmallow, shuffleDeck }) {
    function handleClick() {
        shuffleDeck();
    }

    return (
        <div className={classes.container} onClick={handleClick}>
            <img
                className={classes.image}
                src={squishmallow.file.default}
                alt={squishmallow.name}
            />
            <p className={classes.text}>{squishmallow.name}</p>
        </div>
    );
}
