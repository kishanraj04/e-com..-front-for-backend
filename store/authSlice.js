import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser:""
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updateLoggedInUserStatus:(state,action)=>{
            state.loggedInUser = action.payload
        },
        loggedInUserName:(state,action)=>{
            state.loggedInUserName = action.payload
        },
        logOut: (state) => {
            state.loggedInUserName = null;  // Clear user data
            state.isAuthenticated = false;  // Mark user as logged out
          },
    }
})

export const authReducer = authSlice.reducer
export const {updateLoggedInUserStatus,loggedInUserName,logOut} = authSlice.actions