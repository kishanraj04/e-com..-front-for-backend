import React, { useContext, useEffect, useMemo, useState } from "react";
import { useGetAllCartItemQuery } from "../../../api/apiCallingForCart";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";
import { useSelector } from "react-redux";
import { getCartData } from "../../../utils/getCartData";
import { GlobalContect } from "../../context/globalContect";
import { useNavigate } from "react-router";

function OrderSummary() {
  const loggedInUser = useSelector((state) => state?.auth?.loggedInUser);
  const {allCartDataForOrderSummary,setAllCartDataForOrderSummary,itemQtyForOrderSummary, setItemQtyForOrderSummary} = useContext(GlobalContect)
  const { data: allProduct } = useGetAllProductQuery();
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUser?._id, {
    skip: !loggedInUser?._id,
  });

  const navigate = useNavigate()
  // const [allCartData, setAllCartData] = useState([]);
 

  const cartData = useMemo(() => {
    return getCartData(allProduct, allCartItem?.cartItem);
  }, [allProduct, allCartItem]);

  useEffect(() => {
    setAllCartDataForOrderSummary([...cartData.filter((cartItem)=>cartItem?.stock>=1)]);
  }, [cartData]);

  // Function to update quantity
  const handleQuantityChange = (productId, change, maxStock) => {
    setItemQtyForOrderSummary((prevQty) => {
      const currentQty = prevQty[productId] || 1;
      const newQty = currentQty + change;
      if (newQty >= 1 && newQty <= maxStock) {
        return { ...prevQty, [productId]: newQty };
      }
      return prevQty;
    });
  };

  // Function to remove item
  const handleRemove = (productId) => {
    // console.log(allCartDataForOrderSummary);
    const filteredCart = allCartDataForOrderSummary.filter((item) => item._id !== productId && item?.stock!=0);
    setAllCartDataForOrderSummary(filteredCart);

    setItemQty((prevQty) => {
      const updatedQty = { ...prevQty };
      delete updatedQty[productId];
      return updatedQty;
    });
  };


  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <div className="bg-blue-600 text-white font-bold p-3 rounded-t">
        3 ORDER SUMMARY
      </div>

      {allCartDataForOrderSummary?.map((product) => (
        <div key={product?._id} className="flex border-b p-4 last:border-none gap-4 ">
          <img
            src={product?.images?.[0]}
            alt={product?.name}
            className="w-20 h-24 object-cover rounded"
          />

          <div className="flex flex-col flex-1">
            <div className="font-semibold text-gray-800">{product?.name}</div>
            <div className="text-sm text-gray-500">
              Size: W {product?.dimensions?.width} | H {product?.dimensions?.height}
            </div>
            <div className="text-sm text-gray-500">
              Seller: {product?.brand}
            </div>

            <div className="flex items-center mt-2 space-x-2">
              <div className="text-lg font-bold text-black">
                ₹{Math.round(product?.price)}
              </div>
              <div className="text-gray-400 line-through text-sm">
                ₹{product?.price+product?.discountPercentage}
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center mt-3 space-x-2">
              <button
                className="border px-3 py-1 rounded hover:bg-gray-100"
                onClick={() => handleQuantityChange(product?._id, -1, product?.stock)}
              >
                -
              </button>
              <div className="px-3">{itemQtyForOrderSummary[product._id] || 1}</div>
              <button
                className="border px-3 py-1 rounded hover:bg-gray-100"
                onClick={() => handleQuantityChange(product._id, 1, product?.stock)}
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="text-red-500 mt-2 text-sm hover:underline"
              onClick={() => handleRemove(product._id)}
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="p-4 text-gray-700 text-sm flex justify-between">
        Order confirmation email will be sent to{" "}
        <span className="font-semibold">{loggedInUser?.email}</span>
        <button className="bg-orange-400 p-2 font-bold text-white" onClick={()=>{navigate('/home/product/payment')}}>Continue</button>
      </div>

    </div>
  );
}

export default OrderSummary;
