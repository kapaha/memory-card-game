import React from 'react';
import { useGame } from '../../hooks';
import CardGrid from './CardGrid';
import GameOver from './GameOver';
import classes from './Game.module.css';
import UserInterface from './UserInterface';

export default function Game() {
    const {
        activeCards,
        currentScore,
        bestScore,
        handleCardClick,
        isGameOver,
        resetGame,
        currentLevel,
    } = useGame();

    return (
        <main className={classes.container}>
            {isGameOver ? (
                <GameOver currentScore={currentScore} resetGame={resetGame} />
            ) : (
                <>
                    <UserInterface
                        currentLevel={currentLevel}
                        currentScore={currentScore}
                        bestScore={bestScore}
                    />
                    <CardGrid
                        activeCards={activeCards}
                        handleCardClick={handleCardClick}
                    />
                </>
            )}
        </main>
    );
}
