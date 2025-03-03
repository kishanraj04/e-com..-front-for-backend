import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    loggedInUserName:''
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updateLoggedInUserStatus:(state,action)=>{
            console.log("av ",action.payload);
            state.isLoggedIn = action.payload.status
        },
        loggedInUserName:(state,action)=>{
            state.loggedInUserName = action.payload.loggedInUser
        }
    }
})

export const authReducer = authSlice.reducer
export const {updateLoggedInUserStatus,loggedInUserName} = authSlice.actions