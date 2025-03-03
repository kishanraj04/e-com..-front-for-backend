import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updateLoggedInUserStatus:(state,action)=>{
            state.isLoggedIn = action.payload.status
        }
    }
})

export const authReducer = authSlice.reducer
export const {updateLoggedInUserStatus} = authSlice.actions