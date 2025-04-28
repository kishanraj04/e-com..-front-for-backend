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