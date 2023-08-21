import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";
import itemReducer from"./cartsSlice";

export const store = configureStore({
    reducer:{
        product: productReducer,
        categories:categoryReducer,
        cart:cartReducer,
        items:itemReducer
    }
})