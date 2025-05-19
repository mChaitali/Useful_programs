import { useCounter } from './UseCounter';
import './Counter.css';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0); // start from 0

  return (
    <div className='counterWrapper'>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
