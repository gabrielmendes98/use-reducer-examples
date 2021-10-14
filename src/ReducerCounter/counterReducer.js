import { useReducer } from 'react';

export const initialState = { count: 0 };

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const reducer = (state, { type }) => {
  switch (type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error('Ação inválida');
  }
};

export const useCounter = () => {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return { count, increment, decrement };
};
