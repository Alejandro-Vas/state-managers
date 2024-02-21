import {Typography} from '@mui/material';
import './App.css';
import {BearCounter, LegacyCounter, Todos} from './components';
import CustomCounter from './components/CustomCounter/CustomCounter';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

const styles = {mt: 10};

function App() {
  return (
    <>
      <Typography variant="h4">Custom Redux</Typography>
      <CustomCounter />

      <Provider store={store as never}>
        <Typography variant="h4" sx={styles}>
          HOC REDUX
        </Typography>
        <LegacyCounter />
      </Provider>

      <Typography variant="h4" sx={styles}>
        ZUSTAND
      </Typography>
      <BearCounter />
      <BearCounter />
      <Todos />
    </>
  );
}

export default App;
