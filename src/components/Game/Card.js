import React from 'react';
import classes from './Card.module.css';

export default function Card({ squishmallow }) {
    return (
        <div className={classes.container}>
            <img
                className={classes.image}
                src={squishmallow.file.default}
                alt={squishmallow.name}
            />
            <p className={classes.text}>{squishmallow.name}</p>
        </div>
    );
}
