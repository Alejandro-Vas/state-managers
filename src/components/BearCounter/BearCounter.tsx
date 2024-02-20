import {Button, Typography} from '@mui/material';
import {useBearStore} from '../../store/zustand/store';

function BearCounter() {
  const {bears, increasePopulation, removeAllBears} = useBearStore((state) => state);

  return (
    <>
      <Typography variant="h3">bears count = {bears}</Typography>

      <Button variant="contained" color="success" onClick={increasePopulation}>
        add 🐻
      </Button>

      <Button variant="outlined" color="error" onClick={removeAllBears} sx={{ml: 2}}>
        remove 🐻
      </Button>
    </>
  );
}

export default BearCounter;
