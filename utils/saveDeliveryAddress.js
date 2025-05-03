import { toast } from "react-toastify";
export const saveDeliveryAddress = async(address,saveDeliveyAddress)=>{
    try {
        const response = await saveDeliveyAddress(address)
        if(response){
            toast.success("address added")
        }
    } catch (error) {
        
    }
}

export const updateDeliveryAddressFun = async(address,updateAddressValue)=>{
    try {
        const updateResponse = await updateAddressValue(address)
        if(updateResponse){
            toast.success("delivery address updated")
        }else{
            toast.error("failed to update")
        }
        // console.log(updateResponse);
    } catch (error) {
        toast.error(error?.message)
    }
}

export const deleteUserDeliveryAddress = async(deleteDelAddress,id)=>{
    try {
        const deletedResp = await deleteDelAddress(id)
        console.log(deletedResp);
        if(deletedResp?.data?.success){
            toast.success("address deleted")
        }
    } catch (error) {
        toast.error("deletion failed")
    }
}