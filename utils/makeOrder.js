export const makeYourOrder = async(method,data)=>{
      try {
        const resp = await method(data)
        console.log(resp);
      } catch (error) {
        console.log(error.message);
      }
}