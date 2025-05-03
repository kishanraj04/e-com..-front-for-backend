import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useDeleteDeliveryAddressMutation,
  useGetAllDeliveryAddressQuery,
} from "../../../api/apiCallingForContact";
import AddressForm from "./NewAddressForm";
import { GlobalContect } from "../../context/globalContect";
import { MdDeleteOutline } from "react-icons/md";
import { deleteUserDeliveryAddress } from "../../../utils/saveDeliveryAddress";

function AnotherAddress() {
  const [idFlag, setIdFlag] = useState("");  // selected id
  const [userDeliveryAddress, setUserDeliveryAddress] = useState([]);
  const [deleteUserDelAddress,deleteResp] = useDeleteDeliveryAddressMutation()
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  
  const { data: deliveryAdddress } = useGetAllDeliveryAddressQuery(loggedInUserId, { skip: !loggedInUserId });
  
  const {
    editFlag, setEditFlag,
    addNewAddressFlag, setAddNewAddressFlag,
    isDeliverHere, setIsDeliverHere,deliverHereFlag,setIsDeliverHereFlag
  } = useContext(GlobalContect);

  useEffect(() => {
    if (deliveryAdddress?.data) {
      setUserDeliveryAddress(deliveryAdddress.data);
    }
  }, [deliveryAdddress]);

  const handleDeliverHere = () => {
    if (idFlag) {
      const filtered = deliveryAdddress.data.filter(address => address._id === idFlag);
      setUserDeliveryAddress(filtered);
      setIsDeliverHere(true);
    }
  };

  const handleChangeAddress = () => {
    setUserDeliveryAddress(deliveryAdddress?.data || []);
    setIsDeliverHere(false);
  };

  return (
    <>
      {/* Delivery Addresses */}
      {userDeliveryAddress?.map((address) => (
        <div
          key={address._id}
          className={`border rounded-lg p-4 flex flex-col space-y-2 ${editFlag === address._id ? "hidden" : ""}`}
        >
          {/* Edit Form */}
          {editFlag === address._id && <AddressForm address={address} />}

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="address"
              checked={address._id === idFlag}
              onChange={() => setIdFlag(address._id)}
            />
            <div className="flex w-full justify-between">
              <p className="font-semibold">
                {address.name}
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded ml-2">
                  {address.addressType}
                </span> {address.contact}
              </p>

              {address._id === idFlag && (
                <>
                  {!isDeliverHere ? (
                    <button
                      className="font-sans font-bold text-blue-500"
                      onClick={() => {
                        setEditFlag(address._id);
                        setAddNewAddressFlag(false);
                      }}
                    >
                      EDIT
                    </button>
                  ) : (
                    <button
                      className="font-sans font-bold text-blue-500"
                      onClick={handleChangeAddress}
                    >
                      CHANGE
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            {address.address} - <span className="font-bold">{address.pincode}</span>
          </p>

          {/* Deliver Here Button */}
          {idFlag === address._id &&  (
           <div className="flex justify-between items-center">
             <button
              className="bg-orange-400 text-white py-1 px-4 rounded"
              onClick={()=>{handleDeliverHere()
                setIsDeliverHereFlag(true)
              }}
            >
              Deliver Here
            </button>
            <MdDeleteOutline size={"1.3rem"} color="red" onClick={()=>deleteUserDeliveryAddress(deleteUserDelAddress,address?._id)}/>
           </div>
          )}
          
        </div>
      ))}
    </>
  );
}

export default AnotherAddress;
