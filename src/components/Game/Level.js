import React from 'react';
import classes from './Level.module.css';

export default function Level({ currentLevel }) {
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Level: {currentLevel}</h1>
        </div>
    );
}
