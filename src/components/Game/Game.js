import React from 'react';
import { useGame } from '../../hooks';
import CardGrid from './CardGrid';
import GameOver from './GameOver';
import Instructions from './Instructions';
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
        showInstructions,
        toggleInstructions,
    } = useGame();

    return (
        <main className={classes.container}>
            {isGameOver ? (
                <GameOver currentScore={currentScore} resetGame={resetGame} />
            ) : showInstructions ? (
                <Instructions
                    showInstructions={showInstructions}
                    toggleInstructions={toggleInstructions}
                />
            ) : (
                <>
                    <Instructions
                        showInstructions={showInstructions}
                        toggleInstructions={toggleInstructions}
                    />
                    <UserInterface
                        currentLevel={currentLevel}
                        currentScore={currentScore}
                        bestScore={bestScore}
                        toggleInstructions={toggleInstructions}
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
