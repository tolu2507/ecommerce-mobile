import { createAsyncThunk } from "@reduxjs/toolkit";

export const Fetch ={
    products:createAsyncThunk(
        'fetchProducts',
        async () => {
          const response = await fetch('https://fakestoreapi.com/products')
         const res = await response.json();
         return res;
        }
      ),
    cartegories: createAsyncThunk(
        'fetchCategories',
        async () => {
          const response = await fetch('https://fakestoreapi.com/products/categories')
         const res = await response.json();
         return res;
        }
      ),
      carts:createAsyncThunk(
        'fetchCart',
        async (id) => {
          const response = await fetch(`https://fakestoreapi.com/carts/user/${id}`)
         const res = await response.json();
         return res;
        }
      )
}