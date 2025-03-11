export const increaseCartItemQty = async(increaseItemQty,id)=>{
 try {
    console.log("run");
    const increaseResp = await increaseItemQty(id)
 console.log("res ",increaseResp);  
 } catch (error) {
    console.log(error.message);
 }
}


export const decreaseCartItemQty = async(decreaseItemQty,id)=>{
   try {
      console.log("run");
      const decreaseResp = await decreaseItemQty(id)
   console.log("res ",decreaseResp);  
   } catch (error) {
      console.log(error.message);
   }
}