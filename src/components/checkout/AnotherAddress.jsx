import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetAllDeliveryAddressQuery,
  useUpdateDeliveryAddressMutation,
} from "../../../api/apiCallingForContact";
import AddressForm from "./NewAddressForm";
import { GlobalContect } from "../../context/globalContect";

function AnotherAddress({ address }) {
  const [idFlag, setIdFlag] = useState("");
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { data: deliveryAdddress, deliveryResp } =
    useGetAllDeliveryAddressQuery(loggedInUserId, { skip: !loggedInUserId });

  const {editFlag,setEditFlag,addNewAddressFlag,setAddNewAddressFlag} = useContext(GlobalContect)

  return (
    <>
      {/* Another Address */}
      {deliveryAdddress?.data?.map((address, idx) => (
        <>
          {editFlag == address?._id ? <AddressForm address={address} /> : ""}
          <div
            className={`border rounded-lg p-4 flex flex-col space-y-2
              
${editFlag == address?._id ? "hidden" : ""}`}
            key={idx}
          >
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="address"
                onClick={() => {
                  setIdFlag(address?._id);
                }}
              />
              <div className="flex w-full justify-between">
                <p className="font-semibold">
                  {address?.name}
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">
                    {address?.addressType}
                  </span>{" "}
                  {address?.contact}
                </p>
                <button
                  className={`font-sans font-bold text-blue-500 ${
                    address?._id != idFlag ? "hidden" : ""
                  }`}
                  onClick={() => {setEditFlag(address?._id)
                    setAddNewAddressFlag(false)
                  }}
                >
                  EDIT
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {address?.address}
              <span className="font-bold">{address?.pincode}</span>
            </p>
            <button
              className={`bg-orange-400 ${
                idFlag != address?._id ? "hidden" : ""
              }`}
            >
              Deliver Here
            </button>
          </div>
        </>
      ))}
    </>
  );
}

export default AnotherAddress;
