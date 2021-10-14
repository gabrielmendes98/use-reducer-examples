import './App.css';
import ContextCounter from './ContextCounter';
import { CounterProvider } from './contexts/counter';
import ReducerCounter from './ReducerCounter';
import StateCounter from './StateCounter';

const App = () => {
  return (
    <>
      <StateCounter />
      <ReducerCounter />
      <CounterProvider>
        <ContextCounter />
        <ContextCounter />
      </CounterProvider>
    </>
  );
};

export default App;
