import React from 'react';
import classes from './CardGrid.module.css';
import Card from './Card';

export default function CardGrid({ squishmallows }) {
    return (
        <div className={classes.container}>
            {squishmallows.map((squishmallow) => (
                <Card key={squishmallow.name} squishmallow={squishmallow} />
            ))}
        </div>
    );
}
