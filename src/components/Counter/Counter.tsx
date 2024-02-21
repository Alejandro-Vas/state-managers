import {Button, Typography} from '@mui/material';

type CounterProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleIncrementByCount: () => void;
  count: number;
};

const Counter = (props: CounterProps) => {
  const {handleDecrement, handleIncrement, handleIncrementByCount, count} = props;
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
