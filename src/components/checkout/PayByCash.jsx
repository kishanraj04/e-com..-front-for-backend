import React, { useContext } from 'react'
import { GlobalContect } from '../../context/globalContect'
import { useOrderTheProductMutation } from '../../../api/apiCallingForOrder';
import { makeYourOrder } from '../../../utils/makeOrder';
import Spinner from '../spinner/Spinner';

function PayByCash() {

  const {allCartDataForOrderSummary,finalDeliveryAdddress,totalPrices} = useContext(GlobalContect)
  const idAndQty = allCartDataForOrderSummary.map((item)=>{
    return {pid:item?._id,qty:item?.qty,price:item?.price}
  })
  console.log(finalDeliveryAdddress);
  const [makeOrder,orderResp] = useOrderTheProductMutation()
  return (
    <div className='w-full'>
        <button className='bg-orange-400 w-full p-3 rounded-md text-white  text-xl font-bold' onClick={()=>{
                    makeYourOrder(makeOrder,{orderItems:idAndQty,shippingInfo:finalDeliveryAdddress,totalPrice:Math.floor(totalPrices)+3})
        }}><span className={`${orderResp?.isSuccess?"text-black":""}`}>{orderResp.isLoadin?<Spinner/>:orderResp?.isError?"something went wrong":orderResp?.isSuccess?"congratulations":"Confirm Order"}</span></button>
    </div>
  )
}

export default PayByCash