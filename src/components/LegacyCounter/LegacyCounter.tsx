import {Component} from 'react';
import {connect} from 'react-redux';
import {RootState, increment, decrement, incrementBy} from '../../store/redux/store';
import {Counter} from '..';

type StateProps = {
  state: number;
};

type DispatchProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleIncrementByCount: (count: number) => void;
};

type Props = StateProps & DispatchProps;

class LegacyCounter extends Component<Props> {
  render() {
    const {state: count, handleIncrement, handleDecrement, handleIncrementByCount} = this.props;

    const handleIncrementBy = () => {
      handleIncrementByCount(count);
    };
    return (
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleIncrementByCount={handleIncrementBy}
      />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  state,
});

const mapDispatchToProps: DispatchProps = {
  handleDecrement: increment,
  handleIncrement: decrement,
  handleIncrementByCount: incrementBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(LegacyCounter);
