import React from 'react';
import { useGame } from '../../hooks';
import CardGrid from './CardGrid';
import Scoreboard from './Scoreboard';
import GameOver from './GameOver';
import Level from './Level';
import classes from './Game.module.css';

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
                    <Level currentLevel={currentLevel} />
                    <Scoreboard
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
