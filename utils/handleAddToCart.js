import { toast } from "react-toastify";
export const handleAddToCart = async(item,dispatch,addInCart)=>{
   
    try {
        const cartResp = await addInCart({productId:item?._id,qty:1})
        console.log(cartResp?.data?.message);
        if(cartResp?.data?.message=="product add in the cart"){
            toast.success("product added")
        }
    } catch (error) {
        console.log(error);
    }

}