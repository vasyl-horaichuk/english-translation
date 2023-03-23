import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectWords = state => state.words.items;

console.log(selectWords);
console.log(selectFilter);

export const selectFilteredWords = createSelector(
  [selectFilter, selectWords],
  (filter, words) => {
    return words.filter(
      word =>
        word.ukrWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.engWord.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
