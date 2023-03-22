import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addWord } = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
