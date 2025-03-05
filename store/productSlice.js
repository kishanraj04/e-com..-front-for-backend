import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryData:[],
    allProduct:[]
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        saveCategoryProduct:(state,action)=>{
            state.categoryData = action.payload.data
        },
        saveAllProduct:(state,action)=>{
            state.allProduct = action.payload.data
        }
    }

})


export const productReducer = productSlice.reducer
export const {saveCategoryProduct,saveAllProduct} = productSlice.actions