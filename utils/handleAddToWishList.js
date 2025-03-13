export const handleAddToWishList = async(item,addWishListItem)=>{
   try {
        const addWishListResp = await addWishListItem({pid:item?._id,price:item?.price})
        console.log("add ",addWishListResp);
   } catch (error) {
    
   }
}