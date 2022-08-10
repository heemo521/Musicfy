import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import homeSliceReducer from './homeSlice';

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    home: homeSliceReducer,
  },
});

export default store;
