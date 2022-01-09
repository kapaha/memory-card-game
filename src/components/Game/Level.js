import React from 'react';
import classes from './Level.module.css';

export default function Level({ currentLevel }) {
    return (
        <div className={classes.container}>
            <p className={classes.text}>Level: {currentLevel}</p>
        </div>
    );
}
