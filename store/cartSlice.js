import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchCart = createAsyncThunk(
  'fetchCart',
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/carts/user/${id}`)
   const res = await response.json();
   return res;
  }
)
const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default cartSlice.reducer