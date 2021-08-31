import { Header, Game } from './components';
import classes from './App.module.css';

function App() {
    return (
        <div className={classes.container}>
            <Header />
            <Game />
        </div>
    );
}

export default App;
