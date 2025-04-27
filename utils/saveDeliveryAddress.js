export const saveDeliveryAddress = async(address,saveDeliveyAddress)=>{
    try {
        console.log(saveDeliveyAddress);
        const response = await saveDeliveyAddress(address)
        console.log("response ",response);
    } catch (error) {
        
    }
}