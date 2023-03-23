import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {},
  },
});

export const { filter } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
