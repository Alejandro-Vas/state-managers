import {useEffect, useState} from 'react';
import {decrement, increment, incrementBy, store} from '../../store/redux/store';
import {Counter} from '..';

const CustomCounter = () => {
  const [, updateState] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      updateState({});
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const count = store.getState();

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  const handleIncrementByCount = () => {
    store.dispatch(incrementBy(count));
  };

  return (
    <Counter
      count={count}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      handleIncrementByCount={handleIncrementByCount}
    />
  );
};

export default CustomCounter;
