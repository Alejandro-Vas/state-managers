import {AccordionSection, BearCounter, LegacyCounter, RTKCounter, Todos} from './components';
import CustomCounter from './components/CustomCounter/CustomCounter';
import {Provider} from 'react-redux';
import {store as customStore} from './store/redux/store';
import {store as RTKStore} from './store/RTK/store';
import './App.css';

function App() {
  return (
    <>
      <AccordionSection title="Custom Redux">
        <CustomCounter />
      </AccordionSection>

      <AccordionSection title="HOC Redux">
        <Provider store={customStore as never}>
          <LegacyCounter />
        </Provider>
      </AccordionSection>

      <AccordionSection title="RTK">
        <Provider store={RTKStore}>
          <RTKCounter />
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
