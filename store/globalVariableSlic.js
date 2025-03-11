import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageno:0 
}
const globalVariableSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        updatePageNumber:(state,action)=>{
            state.pageno = action.payload.pageNo/20 
        }
    }
})

export const globalVariableReducer =  globalVariableSlice.reducer
export const {updatePageNumber} = globalVariableSlice.actions