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
    deleteWord(state, action) {
      state.items = state.items.filter(word => word.id !== action.payload);
    },
    // editWord(state, action) {
    //   state.items.push(action.payload);
    // },
  },
});

export const { addWord, deleteWord } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
