import React from 'react';
import classes from './CardGrid.module.css';
import Card from './Card';

export default function CardGrid({ activeCards, handleCardClick }) {
    return (
        <div className={classes.container}>
            {activeCards.map((card) => (
                <Card
                    // Math.random used to make cards
                    // rerender every time so animation runs
                    key={card.name + Math.random()}
                    card={card}
                    handleCardClick={handleCardClick}
                />
            ))}
        </div>
    );
}
