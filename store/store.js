import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './loginSlice';
import searchSlice from './searchSlice';
import homeSliceReducer from './homeSlice';
import playerSliceReducer from './playerSlice';

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    search: searchSlice,
    home: homeSliceReducer,
    player: playerSliceReducer,
  },
});

export default store;
