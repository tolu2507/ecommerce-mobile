import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products')
   const res = await response.json();
   return res;
  }
)
const productSlice = createSlice({
  name: "products",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default productSlice.reducer