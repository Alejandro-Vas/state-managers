import {configureStore} from '@reduxjs/toolkit';
import {swApi} from './swApi';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
    counterSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
