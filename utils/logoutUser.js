import { useLogOutUserMutation } from "../api/apiCallingForUser"
import { updateLoggedInUserStatus } from "../store/authSlice";

export const logoutUser = async(logoutUser,navigate,dispatch)=>
{
    
    try {
        const logoutResponse =await logoutUser()
        console.log(logoutResponse);
        if(logoutResponse?.data?.success)
        {
            dispatch(updateLoggedInUserStatus({status:false}))
            navigate('/')
        }
    } catch (error) {
        
    }
}