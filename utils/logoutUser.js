import { toast } from "react-toastify";
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

// delete an user
export const deleteUser = async(method,id)=>{
    try {
        const resp = await method(id);
        if(resp?.data?.success)
        {
            toast.success("user Deleted")
        }
    } catch (error) {
        toast.error(error.message)
    }
}