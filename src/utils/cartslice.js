import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{ // yehaan pe reducers hoga redu
        addItem : (state,action)=>{
            state.items.push(action.payload);

        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
});
export const{addItem,removeItem,clearItem}=Cartslice.actions;
export default Cartslice.reducer; 
