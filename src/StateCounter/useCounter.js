import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((initCount) => initCount + 1);
  const decrement = () => setCount((initCount) => initCount - 1);

  return { count, increment, decrement };
};
