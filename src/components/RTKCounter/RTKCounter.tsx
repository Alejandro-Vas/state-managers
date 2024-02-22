import {Counter} from '..';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementBy} from '../../store/RTK/counterSlice';
import {RootState} from '../../store/RTK/store';

const RTKCounter = () => {
  const {count} = useSelector((state: RootState) => state.counterSlice);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByCount = () => {
    dispatch(incrementBy(count));
  };

  return (
    <Counter
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleIncrementByCount={handleIncrementByCount}
    />
  );
};

export default RTKCounter;
