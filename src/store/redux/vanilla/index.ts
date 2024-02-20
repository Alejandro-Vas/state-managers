type ActionTypeVariant = 'INCREMENT' | 'DECREMENT' | 'INCREMENT_BY';

type Action = {
  type: ActionTypeVariant;
  payload?: number;
};

// actionCreator - функция, принимающая тип действия (action type)
// кроме type может быть payload (передаваемое значение)
export const increment = (): Action => ({type: 'INCREMENT'});
export const decrement = (): Action => ({type: 'DECREMENT'});
export const incrementBy = (payload: number): Action => ({type: 'INCREMENT_BY', payload});

type State = number;

// reducer - чистая функция, которая получает текущий state и action для его изменения
const counterReducer = (state: State = 0, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_BY':
      if (action.payload) {
        return state + action.payload;
      }
      return state;
    default:
      return state;
  }
};

type Store = {
  getState: () => State;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
};

// store - функция, возвращающая текущий state и функцию (dispatch) для его изменения и
// функцию подписки на изменение state (subscribe)
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
