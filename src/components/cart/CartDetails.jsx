import React from "react";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";
import { useSelector } from "react-redux";
import {
  useDecreaseItemQtyMutation,
  useGetAllCartItemQuery,
  useIncreaseItemQtyMutation,
  useRemoveFromCartMutation,
} from "../../../api/apiCallingForCart";
import { getCartData } from "../../../utils/getCartData";
import { FaMinus, FaPlus } from "react-icons/fa";
import { handleAddToCart } from "../../../utils/handleAddToCart";
import {
  decreaseCartItemQty,
  increaseCartItemQty,
} from "../../../utils/increaseDecreaseItemQty";
import { deleteItemFromCart } from "../../../utils/deleteItemFromCart";

function CartDetails() {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const [increaseItemQty, increaseResp] = useIncreaseItemQtyMutation();
  const [removerFromCart, removeResp] = useRemoveFromCartMutation();
  const [decreaseItemQty, decreaseResp] = useDecreaseItemQtyMutation();
  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });

  // console.log("all cart item ",allCartItem);

  const cartData = getCartData(allProduct, allCartItem?.cartItem);
  return (
    <>
      {/* Cart Items Section */}
      <div className="w-full lg:w-3/4 bg-white shadow rounded-lg p-4 sm:p-6 h-[70vh] lg:h-screen overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          YOUR BAG ({cartData?.length} ITEMS)
        </h2>

        <div className="space-y-4">
          {cartData?.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:w-[50%]">
                <img
                  src={item?.images[0]}
                  alt={item?.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item?.name}</h3>
                  <p className="text-sm text-gray-500">Title: {item?.title}</p>
                  <p className="text-sm text-gray-500">
                    Rating: {item?.rating} Stars
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="w-full sm:w-[10%] text-center font-bold">
                ${Math.floor(item?.price) * item?.qty || 20}
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 w-full sm:w-[30%] justify-start sm:justify-center">
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() =>
                    item?.qty > 1
                      ? decreaseCartItemQty(decreaseItemQty, item?._id)
                      : deleteItemFromCart(item, removerFromCart)
                  }
                >
                  <FaMinus />
                </button>
                <span className="px-2">{item?.qty}</span>
                <button
                  className={`p-2 rounded ${
                    item?.qty >= item?.stock
                      ? "bg-gray-300 cursor-not-allowed opacity-50"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() =>
                    item?.qty < item?.stock &&
                    increaseCartItemQty(increaseItemQty, item?._id)
                  }
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CartDetails;
