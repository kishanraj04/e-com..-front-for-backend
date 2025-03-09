import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartData:[]
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.cartData = action.payload    
        },
        
    }
})

export const cartReducer = cartSlice.reducer
export const {addToCart} = cartSlice.actions