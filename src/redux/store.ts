import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { resultSlice } from './resultSlice';

const reducer = combineReducers({ resultSlice: resultSlice.reducer });

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof reducer>;
