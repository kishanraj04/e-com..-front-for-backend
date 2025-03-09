import { asyncHandler } from "../../server/middleware/asyncErrorHandler";

export const deleteItemFromCart = asyncHandler(async(item,dispatch,removeFromCart)=>{
 const respo = await removeFromCart({_id:item?._id})
 console.log("respi ",respo); 
console.log(item);  
})