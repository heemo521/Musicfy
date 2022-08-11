import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import searchSlice from './searchSlice';
import homeSliceReducer from './homeSlice';

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    search: searchSlice,
    home: homeSliceReducer,
  },
});

export default store;
