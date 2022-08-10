import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  id: '',
  albums: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setId, setAlbums } =
  homeSlice.actions;
export default homeSlice.reducer;
