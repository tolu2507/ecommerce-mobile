import { createSlice } from '@reduxjs/toolkit'
import { Fetch } from '../service/service';

const productSlice = createSlice({
  name: "products",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(Fetch.products.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default productSlice.reducer