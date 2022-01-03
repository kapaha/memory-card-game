import React from 'react';
import classes from './CardGrid.module.css';
import Card from './Card';

export default function CardGrid({ activeCards, handleCardClick }) {
    return (
        <div className={classes.container}>
            {activeCards.map((card) => (
                <Card
                    key={card.name}
                    card={card}
                    handleCardClick={handleCardClick}
                />
            ))}
        </div>
    );
}
