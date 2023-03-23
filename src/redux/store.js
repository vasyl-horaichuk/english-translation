import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { wordsReducer } from './wordSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['words'],
};

const reducer = combineReducers({ words: wordsReducer });
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
