import React from 'react';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <h1 className={classes.gameName}>Memory Card Game</h1>
        </header>
    );
}
