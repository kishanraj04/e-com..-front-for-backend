import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishListData:[]
}
const cartSlice = createSlice({
    name:'wishList',
    initialState,
    reducers:{
        addWishList:(state,action)=>{}
    }
})

export const wishListReducer = cartSlice.reducer
export const {addWishList} = cartSlice.actions