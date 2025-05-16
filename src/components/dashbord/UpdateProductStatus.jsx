import React from "react";
import { useLocation } from "react-router";

function UpdateProductStatus() {
  const { state } = useLocation();
  return (
    <div className="h-[91vh] w-full bg-black flex justify-center items-center flex-col gap-5">
      <select
        name="hii"
        defaultValue="Processing"
        className="text-black w-[30%] p-2 font-serif font-bold"
      >
        {[
          "Processing",
          "Shipped",
          "In Transit",
          "Out For Delivery",
          "Cancled",
        ].map((item,index) => (
          <option key={index} value={item} className="text-black">
            {item}
          </option>
        ))}
      </select>

      <button className="bg-orange-300 font-bold rounded-md text-black font-serif p-2 w-[30%]">
        Update
      </button>
    </div>
  );
}

export default UpdateProductStatus;
