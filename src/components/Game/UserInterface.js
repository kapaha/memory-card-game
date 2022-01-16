import Level from './Level';
import Scoreboard from './Scoreboard';
import classes from './UserInterface.module.css';

export default function UserInterface({
    currentLevel,
    currentScore,
    bestScore,
}) {
    return (
        <div className={classes.container}>
            <Level currentLevel={currentLevel} />
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
    );
}
