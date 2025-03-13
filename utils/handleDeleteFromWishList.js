export const handleDeleteFromWishList = async(item,deleteItemFromWishList)=>{
    try {
        const deletedResp = await deleteItemFromWishList(item?._id)
        console.log("wrs ",deletedResp);
    } catch (error) {
        
    }
}