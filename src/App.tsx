import {AccordionSection, BearCounter, LegacyCounter, Todos} from './components';
import CustomCounter from './components/CustomCounter/CustomCounter';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
import './App.css';

function App() {
  return (
    <>
      <AccordionSection title="Custom Redux">
        <CustomCounter />
      </AccordionSection>

      <AccordionSection title="HOC Redux">
        <Provider store={store as never}>
          <LegacyCounter />
        </Provider>
      </AccordionSection>

      <AccordionSection title="Zustand">
        <>
          <BearCounter />
          <BearCounter />
          <Todos />
        </>
      </AccordionSection>
    </>
  );
}

export default App;
