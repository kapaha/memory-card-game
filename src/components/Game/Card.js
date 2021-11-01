import React from 'react';
import classes from './Card.module.css';

export default function Card({ card, shuffleDeck }) {
    function handleClick() {
        shuffleDeck();
    }

    return (
        <div className={classes.container} onClick={handleClick}>
            <img className={classes.image} src={card.imgSrc} alt={card.name} />
            <p className={classes.text}>{card.name}</p>
        </div>
    );
}
