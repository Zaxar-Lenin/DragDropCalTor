import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface calculatorState {
  input: string;
  answer: string;
  expression: string;
}

const initialState: calculatorState = {
  input: '0',
  expression: '',
  answer: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {

      if (state.answer && (action.payload === '*' || action.payload === '/' || action.payload === '+' || action.payload === '-')) {
        state.expression = state.answer + action.payload;
        return;
      }

      if (state.input === '0' || state.answer) {
        state.answer = ''
        state.input = action.payload;
        if(state.expression){
          state.expression = state.expression + action.payload
        }
        return;
      }


      const zeroing = state.expression[state.expression.length - 1];
      if (action.payload === '*' || action.payload === '/' || action.payload === '+' || action.payload === '-') {
        if (state.expression === '' || state.input !== '0') {
          state.expression = state.input + action.payload;
          return;
        }

        state.expression = state.expression + state.input + action.payload;
        return;
      }

      if (zeroing === '*' || zeroing === '/' || zeroing === '+' || zeroing === '-') {
        state.input = action.payload;
        state.expression = state.expression + action.payload;
        return;
      }

      state.input = state.input + action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
      state.input = "0";
    },
  },
});

export const calculatorReduce = calculatorSlice.reducer;

export const { setValue, setAnswer } = calculatorSlice.actions;
