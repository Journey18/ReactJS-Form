import { configureStore } from "@reduxjs/toolkit";
import ReducerSlice from "./slice/ReducerSlice";

export const store = configureStore({
    reducer:{
        ReducerSlice
    }
})