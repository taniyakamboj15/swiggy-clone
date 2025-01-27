import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{ // yehaan pe reducers hoga redu
        addItem : (state,action)=>{
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
              );
              if (itemIndex !== -1) {
                // Increment quantity if item already exists
                state.items[itemIndex].quantity += 1;
              } else {
                // Add new item with quantity = 1
                state.items.push({ ...action.payload, quantity: 1 });
              }

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
