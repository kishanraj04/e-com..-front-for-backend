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

  const cartData = getCartData(allProduct, allCartItem);
  return (
    <>
      {/* Cart Items Section */}
      <div className="w-full lg:w-3/4 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          YOUR BAG ({cartData?.length} ITEMS)
        </h2>
        <div className="space-y-6">
          {cartData &&
            cartData.map((item) => (
              <div
                key={item?.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4 w-[50%]">
                  <img
                    src={item?.images[0]}
                    alt={item?.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item?.name}</h3>
                    <p className="text-sm text-gray-500">
                      Rating: {item?.title} Stars
                    </p>
                    <p className="text-sm text-gray-500">
                      Rating: {item?.rating} Stars
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center w-[10%]">
                  <p className="font-bold text-center">
                    ${Math.floor(item?.price)* item?.qty|| 20}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center  w-[40%]">
                  <button
                    className="p-2 bg-gray-200 hover:bg-gray-300"
                    // onClick={() => decreaseQuantity(item?.id)}
                  >
                    <FaMinus
                      onClick={() => {
                        if (item?.qty > 1) {
                          decreaseCartItemQty(decreaseItemQty, item?._id);
                        } else {
                          deleteItemFromCart(item, removerFromCart);
                        }
                      }}
                    />
                  </button>
                  <span className="px-4">{item?.qty}</span>
                  <button className="p-2 bg-gray-200 hover:bg-gray-300">
                    <FaPlus
                      onClick={
                        item?.qty >= item?.stock
                          ? undefined
                          : () =>
                              increaseCartItemQty(increaseItemQty, item?._id)
                      }
                      className={
                        item?.qty >= item?.stock
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }
                    />
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
