import { configureStore } from '@reduxjs/toolkit';
import { calculatorReduce } from 'store/slice/calculator';

export const store = configureStore({
  reducer: {
    calculator: calculatorReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
