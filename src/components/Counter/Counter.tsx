import {Button, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {decrement, increment, vanillaStore as store} from '../../store/redux/vanilla';

const Counter = () => {
  const [, updateState] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      updateState({});
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  const count = store.getState();

  return (
    <div>
      <Typography variant="h5">Counter: {count}</Typography>

      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>

      <Button variant="outlined" onClick={handleDecrement} sx={{ml: 2}}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
