import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const cartItemCountSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

// Export actions and reducer
export const { increment, decrement, clear } = cartItemCountSlice.actions;
export default cartItemCountSlice.reducer;
