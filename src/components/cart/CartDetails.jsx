import React from "react";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";
import { useSelector } from "react-redux";
import { useGetAllCartItemQuery } from "../../../api/apiCallingForCart";
import { getCartData } from "../../../utils/getCartData";
import { FaMinus, FaPlus } from "react-icons/fa";

function CartDetails() {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);

  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });

  const cartData = getCartData(allProduct, allCartItem);
  console.log(cartData);
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
                    ${Math.floor(item?.price) || 20}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center  w-[40%]">
                  <button
                    className="p-2 bg-gray-200 hover:bg-gray-300"
                    onClick={() => decreaseQuantity(item?.id)}
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4">{item?.qty}</span>
                  <button
                    className="p-2 bg-gray-200 hover:bg-gray-300"
                    onClick={() => increaseQuantity(item?.id)}
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
