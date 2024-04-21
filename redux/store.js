import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// create the store 
export const store = configureStore({
    reducer:{
        //slices go here
        cart: cartSlice
    }
})