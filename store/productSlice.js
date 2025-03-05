import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryData:[],
    allProduct:[],
    singleProduct:''
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
        },
        setSingleProduct:(state,action)=>{
            console.log(" p ",action.payload);
            state.singleProduct = action.payload.data
        }
    }

})


export const productReducer = productSlice.reducer
export const {saveCategoryProduct,saveAllProduct,setSingleProduct} = productSlice.actions