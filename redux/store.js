import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import checkoutSlice from "./slices/checkoutSlice";
import onboardingSlice from "./slices/onboardingSlice";

// create the store 
export const store = configureStore({
    reducer:{
        //slices go here
        cart: cartSlice,
        checkout: checkoutSlice,
        onboarding: onboardingSlice
    }
})

