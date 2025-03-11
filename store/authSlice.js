import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser:""
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updateLoggedInUserStatus:(state,action)=>{
            state.loggedInUser = null; 
        },
        loggedInUser:(state,action)=>{
            state.loggedInUser = action.payload
        },
        logOut: (state) => {
            state.loggedInUser = "";  // Clear user data
            // state.isAuthenticated = false;  // Mark user as logged out
          },
    }
})

export const authReducer = authSlice.reducer
export const {updateLoggedInUserStatus,loggedInUser,logOut} = authSlice.actions