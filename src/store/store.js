import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartReducer";

const rootReducer = combineReducers({

    cart: cartSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
})