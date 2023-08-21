import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload) 
    },
  },
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;