import { toast } from "react-toastify"

export const handleProductSearch = async(navigate,trigger,productname)=>{
        try {
            if(!productname) toast.error("please enter product name")
            const searchResp = await trigger(productname)
            navigate('/home/search',{state:searchResp})
        } catch (error) {
            
        }
}