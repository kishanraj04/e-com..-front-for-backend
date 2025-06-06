import { toast } from "react-toastify";
export const handleAddToCart = async(item,addInCart)=>{
   
    try {
        const cartResp = await addInCart({productId:item?._id,qty:1})
        if(cartResp?.data?.message=="product add in the cart"){
            toast.success("product added")
        }
    } catch (error) {
        toast(error?.message)
    }

}