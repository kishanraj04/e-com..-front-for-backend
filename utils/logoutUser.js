import { useLogOutUserMutation } from "../api/apiCallingForUser"
import { logOut, updateLoggedInUserStatus } from "../store/authSlice";

export const logoutUser = async(logoutUser,navigate,dispatch)=>
{
    
    try {
        const logoutResponse =await logoutUser()
        console.log("logut resp ",logoutResponse);
        if(logoutResponse?.data?.success)
        {
            dispatch(logOut())
            navigate('/')
        }
    } catch (error) {
        
    }
}