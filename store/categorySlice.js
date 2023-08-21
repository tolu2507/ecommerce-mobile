import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchCategories = createAsyncThunk(
  'fetchCategories',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
   const res = await response.json();
   return res;
  }
)

const categorySlice = createSlice({
  name: "category",
  initialState:[],
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default categorySlice.reducer