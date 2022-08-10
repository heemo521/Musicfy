import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
  query: '',
};

export const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { toggleModal, setQuery } = homeSlice.actions;
export default homeSlice.reducer;
