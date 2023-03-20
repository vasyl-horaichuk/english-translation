import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord(state, action) {},
  },
});

export const {} = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
