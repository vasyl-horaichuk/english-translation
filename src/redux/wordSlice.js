import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addWord(state, action) {},
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
