import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
  query: '',
  data: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toggleModal, setQuery, setData } = searchSlice.actions;
export default searchSlice.reducer;
