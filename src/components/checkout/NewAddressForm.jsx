import React, { useContext, useEffect, useState } from "react";
import {
  useSaveAddressMutation,
  useSaveContactMutation,
  useUpdateDeliveryAddressMutation,
} from "../../../api/apiCallingForContact";
import {
  saveDeliveryAddress,
  updateDeliveryAddressFun,
} from "../../../utils/saveDeliveryAddress";
import { GlobalContect } from "../../context/globalContect";

const AddressForm = ({ address }) => {
  const [saveDeliveryAddressApi] = useSaveAddressMutation();
  
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: "",
    contact: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatecontact: "",
    addressType: "",
  });
  
  const [updateDeliveryAddressApi, updatedResponse] =
    useUpdateDeliveryAddressMutation();

  useEffect(() => {
    setDeliveryAddress((prev) => ({
      ...prev,
      ...address,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { editFlag, setEditFlag ,setAddNewAddressFlag} = useContext(GlobalContect);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-xl shadow space-y-6 id">
      {/* Current Location Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2">
        <span>📍</span> Use my current location
      </button>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={deliveryAddress.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
        <input
          type="text"
          name="contact"
          value={deliveryAddress.contact}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
        <input
          type="text"
          name="pincode"
          value={deliveryAddress.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
        <input
          type="text"
          name="locality"
          value={deliveryAddress.locality}
          onChange={handleChange}
          placeholder="Locality"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
      </div>

      <input
        type="text"
        name="address"
        value={deliveryAddress.address}
        onChange={handleChange}
        placeholder="Address (Area and Street)"
        className="border p-2 rounded-md w-full focus:outline-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          value={deliveryAddress.city}
          onChange={handleChange}
          placeholder="City/District/Town"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
        <select
          name="state"
          value={deliveryAddress.state}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-blue-500"
        >
          <option>--Select State--</option>
          <option>Bihar</option>
          <option>Rajasthan</option>
          <option>Uttar Pradesh</option>
          {/* Add more states */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="landmark"
          value={deliveryAddress.landmark}
          onChange={handleChange}
          placeholder="Landmark (Optional)"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
        <input
          type="text"
          name="alternatecontact"
          value={deliveryAddress.alternatecontact}
          onChange={handleChange}
          placeholder="Alternate Phone (Optional)"
          className="border p-2 rounded-md focus:outline-blue-500"
        />
      </div>


      {/* Buttons */}
      <div className="flex items-center gap-6">
        {!editFlag ? (
          <button
            onClick={() => {
              saveDeliveryAddress(deliveryAddress, saveDeliveryAddressApi);
              setAddNewAddressFlag(false)
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold"
          >
            SAVE AND DELIVER HERE
          </button>
        ) : (
          <button
            onClick={() => {
              updateDeliveryAddressFun(
                deliveryAddress,
                updateDeliveryAddressApi
              );
              setEditFlag("")
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold"
          >
            Update
          </button>
        )}
        <button
          className="text-blue-600 font-semibold"
          onClick={() => {
            setEditFlag("");
            setAddNewAddressFlag(false)
            // setIsAddress(!isAddress);
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
