import { createSlice } from '@reduxjs/toolkit'
import { Fetch } from '../service/service'



const categorySlice = createSlice({
  name: "category",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(Fetch.cartegories.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default categorySlice.reducer