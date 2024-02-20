import {Component} from 'react';
import {connect} from 'react-redux';
import {RootState, increment, decrement} from '../../store/redux/store';

type StateProps = {
  state: number;
};

type DispatchProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};

type Props = StateProps & DispatchProps;

class LegacyCounter extends Component<Props> {
  render() {
    const {state, handleIncrement, handleDecrement} = this.props;
    return (
      <div>
        <h2>Counter: {state}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  state,
});

const mapDispatchToProps: DispatchProps = {
  handleDecrement: increment,
  handleIncrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(LegacyCounter);
