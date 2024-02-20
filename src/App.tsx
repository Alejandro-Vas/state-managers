import {Typography} from '@mui/material';
import './App.css';
import {BearCounter, LegacyCounter, Todos} from './components';
import Counter from './components/Counter/Counter';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

function App() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Provider store={store as any}>
      <Typography variant="h4">REDUX</Typography>
      <Counter />
      <LegacyCounter />

      <Typography variant="h4" sx={{mt: 10}}>
        ZUSTAND
      </Typography>
      <BearCounter />
      <BearCounter />
      <Todos />
    </Provider>
  );
}

export default App;
