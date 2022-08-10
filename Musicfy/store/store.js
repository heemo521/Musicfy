import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    search: searchSlice,
  },
});

export default store;
