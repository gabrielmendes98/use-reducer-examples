import { useCounter } from './counterReducer';

const ReducerCounter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ReducerCounter;
