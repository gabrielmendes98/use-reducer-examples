import { createContext, useContext } from 'react';
import { useCounter } from '../ReducerCounter/counterReducer';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const data = useContext(CounterContext);

  if (!data) {
    throw new Error(
      'Certifique-se de que este componente está envolvido em um Counter Provider'
    );
  }

  return data;
};
