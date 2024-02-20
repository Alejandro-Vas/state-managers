type ActionTypeVariant = 'INCREMENT' | 'DECREMENT';

type Action = {
  type: ActionTypeVariant;
};

export const increment = (): Action => ({type: 'INCREMENT'});
export const decrement = (): Action => ({type: 'DECREMENT'});

type State = number;

const counterReducer = (state: State = 0, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

type Store = {
  getState: () => State;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
};

const createStore = (reducer: (state: State, action: Action) => State): Store => {
  let state: State = 0;
  let listeners: Array<() => void> = [];

  const getState = (): State => state;

  const dispatch = (action: Action): void => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return {getState, dispatch, subscribe};
};

export const vanillaStore = createStore(counterReducer);
