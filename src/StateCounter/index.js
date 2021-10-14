import { useCounter } from './useCounter';

const StateCounter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default StateCounter;
