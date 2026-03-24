import { useState } from 'preact/hooks';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Aktuální hodnota: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default Counter;