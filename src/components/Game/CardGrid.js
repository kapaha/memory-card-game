import React from 'react';
import classes from './CardGrid.module.css';
import Card from './Card';

export default function CardGrid({ squishmallows, shuffleDeck }) {
    return (
        <div className={classes.container}>
            {squishmallows.map((squishmallow) => (
                <Card
                    key={squishmallow.name}
                    squishmallow={squishmallow}
                    shuffleDeck={shuffleDeck}
                />
            ))}
        </div>
    );
}
