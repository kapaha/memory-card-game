import React from 'react';
import { useGame } from '../../hooks';

import GameOver from './GameOver';
import UserInterface from './UserInterface';
import Instructions from './Instructions';
import CardGrid from './CardGrid';

import classes from './Game.module.css';

function getSpecificGame(props) {
    return {
        SHOW_INSTRUCTIONS: <Instructions {...props.instructions} />,
        PLAYING: (
            <>
                <UserInterface {...props.userInterface} />
                <CardGrid {...props.cardGrid} />
            </>
        ),
        GAME_OVER: <GameOver {...props.gameOver} />,
    };
}
export default function Game() {
    const { gameState, props } = useGame();

    return (
        <main className={classes.container}>
            {getSpecificGame(props)[gameState]}
        </main>
    );
}
