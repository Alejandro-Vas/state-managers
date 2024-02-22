import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type RTKCounterState = {count: number};

const initialState = {count: 0} as RTKCounterState;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const {increment, decrement, incrementBy} = counterSlice.actions;
export default counterSlice.reducer;
