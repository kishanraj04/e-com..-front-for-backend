export const handleAddToCart = async(item,dispatch,addInCart)=>{
   
    try {
        
        const cartResp = await addInCart({cartProductId:item?._id})
        console.log(cartResp);
    } catch (error) {
        console.log(error);
    }

}