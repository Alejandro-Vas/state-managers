import {Typography} from '@mui/material';
import './App.css';
import {BearCounter, Todos} from './components';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <>
      <Typography variant="h4">REDUX</Typography>
      <Counter />

      <Typography variant="h4" sx={{mt: 10}}>
        ZUSTAND
      </Typography>
      <BearCounter />
      <BearCounter />
      <Todos />
    </>
  );
}

export default App;
