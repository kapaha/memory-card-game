import React from 'react';
import classes from './CardGrid.module.css';
import Card from './Card';

export default function CardGrid({ cards, shuffleDeck }) {
    return (
        <div className={classes.container}>
            {cards.map((card) => (
                <Card key={card.name} card={card} shuffleDeck={shuffleDeck} />
            ))}
        </div>
    );
}
