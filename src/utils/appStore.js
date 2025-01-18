import { configureStore, } from "@reduxjs/toolkit";
import { useReducer } from "react";
import cartReducer from "./cartslice";

const AppStore =configureStore({
    reducer:{
        cart:cartReducer,

    },

});

export default AppStore;  