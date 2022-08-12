import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  selectedList: null,
  playIndex: 0,
  selectedAlbumIndex: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    selectList: (state, action) => {
      state.selectedList = action.payload;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setPlay: (state) => {
      state.isPlaying = true;
    },
    playNext: (state) => {
      state.playIndex++;
    },
    playPrev: (state) => {
      state.playIndex--;
    },
    setIndex: (state, action) => {
      state.playIndex = action.payload;
    },
  },
});

export const { selectList, togglePlay, playNext, playPrev, setIndex, setPlay } =
  playerSlice.actions;
export default playerSlice.reducer;
