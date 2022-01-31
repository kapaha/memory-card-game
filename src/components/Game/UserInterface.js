import Level from './Level';
import Scoreboard from './Scoreboard';
import classes from './UserInterface.module.css';

export default function UserInterface({
    currentLevel,
    currentScore,
    bestScore,
    toggleInstructions,
}) {
    return (
        <div className={classes.container}>
            <Level currentLevel={currentLevel} />
            <button
                className={`btn ${classes.instructionsBtn}`}
                onClick={toggleInstructions}
                aria-label="Show Instructions"
            >
                ?
            </button>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
    );
}
