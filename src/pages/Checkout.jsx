import React, { useContext, useState } from "react";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { totalPrice } from "../helper/helper";
import OrderSection from "../components/cart/OrderSection";
import AnotherAddress from "../components/checkout/AnotherAddress";
import AddressForm from "../components/checkout/NewAddressForm";
import { useGetAllDeliveryAddressQuery } from "../../api/apiCallingForContact";
import { GlobalContect } from "../context/globalContect";

const CheckoutPage = () => {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const {isAddress, setIsAddress,setEditFlag} = useContext(GlobalContect)
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
const {addNewAddressFlag,setAddNewAddressFlag} = useContext(GlobalContect)
  const totalprice = totalPrice(allCartItem);
  return (
    <div className="flex">
    <div className="w-[100%] mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side - Login, Address, Order Summary */}
      <div className="md:col-span-2 space-y-6">
        {/* LOGIN */}
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            1. LOGIN <span className="text-green-500 ml-2">✔</span>
          </h2>
          <p className="text-gray-700">
            Kishu Raj{" "}
            <span className="text-sm text-gray-500 ml-2">+916206826322</span>
          </p>
          <button className="text-blue-600 mt-2 text-sm">CHANGE</button>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">
            2. DELIVERY ADDRESS
          </h2>

          {/* another delivery address */}
         
          <AnotherAddress/>

          {/* Address Options */}
          <div className="space-y-4">
            
            {addNewAddressFlag?<AddressForm/> : ''}

            <button className="text-blue-600 text-sm font-semibold mt-2" onClick={()=>{setAddNewAddressFlag(!isAddress)
              setEditFlag("")
            }}>
              + Add a new address
            </button>
          </div>
        </div>
      </div>

  
    </div>
        <OrderSection />
    </div>
  );
};

export default CheckoutPage;
