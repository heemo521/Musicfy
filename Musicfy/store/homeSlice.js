import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  id: '',
  spotifyAlbum: [],
  musicfyAlbum: [],
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
    setSpotifyAlbum: (state, action) => {
      state.spotifyAlbum = action.payload;
    },
    setMusicfyAlubm: (state, action) => {
      state.musicfyAlbum = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setId, setSpotifyAlbum } =
  homeSlice.actions;
export default homeSlice.reducer;
