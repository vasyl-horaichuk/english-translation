import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
  },
});

export const {} = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
