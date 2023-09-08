import { useState } from 'react';

// styles
import './App.css';

// components
import Button from './components/Button';

// utils
import setColor from './utils/setColor';

const App = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((preState) => preState + 1);
    };
    const resetHandler = () => {
        setCount(0);
    };
    const decrementHandler = () => {
        setCount((preState) => preState - 1);
    };

    return (
        <div className="container">
            <h1>Counter</h1>
            <h2 className={`count ${setColor(count)}`}>{count}</h2>
            <Button
                styling="green"
                text="Increment"
                handleClick={incrementHandler}
            />
            <Button styling="blue" text="Reset" handleClick={resetHandler} />
            <Button
                styling="red"
                text="Decrement"
                handleClick={decrementHandler}
            />
        </div>
    );
};

export default App;
