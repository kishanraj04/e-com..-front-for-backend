import {toast} from 'react-toastify'
export const deleteItemFromCart =async (item,removeFromCart)=>
{
    try {
        const removeresp = await removeFromCart(item?._id)
        console.log(removeresp);
        if(removeresp?.data?.success)
        {
        
            toast.info("item removed")
        }
    } catch (error) {
        toast.error(error.message)
    }
}