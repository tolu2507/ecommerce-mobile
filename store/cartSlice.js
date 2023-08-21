import { createSlice } from '@reduxjs/toolkit'
import { Fetch } from '../service/service'

const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(Fetch.carts.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default cartSlice.reducer