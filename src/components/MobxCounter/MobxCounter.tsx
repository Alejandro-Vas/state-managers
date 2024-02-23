import {observer} from 'mobx-react';
import store from '../../store/mobx/store';
import {Counter} from '..';

const MobxCounter = () => {
  const handleIncrement = () => {
    store.increment();
  };

  const handleDecrement = () => {
    store.decrement();
  };

  const handleIncrementBy = () => {
    store.incrementBy();
  };

  return (
    <Counter
      count={store.counter}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      handleIncrementByCount={handleIncrementBy}
    />
  );
};

export default observer(MobxCounter);
