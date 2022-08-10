import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setToken, setIsLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
