import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
