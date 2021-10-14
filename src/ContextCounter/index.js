import { useCounterContext } from '../contexts/counter';

const ContextCounter = () => {
  const { count, increment, decrement } = useCounterContext();

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ContextCounter;
