import {observable, action, makeObservable} from 'mobx';

class CounterStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action,
      incrementBy: action,
    });
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementBy() {
    this.counter += this.counter;
  }
}

const store = new CounterStore();
export default store;

// with decorators
// class CounterStore {
//   @observable counter = 0;

//   @action increment() {
//     this.counter++;
//   }

//   @action decrement() {
//     this.counter--;
//   }
// }
