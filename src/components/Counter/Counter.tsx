import {Button, Typography} from '@mui/material';
// import {useEffect, useState} from 'react';
import {decrement, increment, incrementBy, vanillaStore as store} from '../../store/redux/vanilla';

const Counter = () => {
  // const [, updateState] = useState({});

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     updateState({});
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

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
    <div>
      <Typography variant="h5">Counter: {count}</Typography>

      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>

      <Button variant="contained" onClick={handleIncrementByCount} sx={{ml: 2}}>
        Increment By Count
      </Button>

      <Button variant="outlined" onClick={handleDecrement} color="error" sx={{ml: 2}}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
