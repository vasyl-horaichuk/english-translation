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
    editWord(state, action) {
      const ind = state.items.findIndex(word => word.id === action.payload.id);
      state.items.splice(ind, 1, action.payload);
    },
  },
});

export const { addWord, deleteWord, editWord } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
