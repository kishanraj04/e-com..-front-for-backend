import React from "react";
import { useGetAllCartItemQuery } from "../../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { totalPrice } from "../../helper/helper";

function OrderSection() {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  totalPrice("ac ",allCartItem)

  const subtotal = 20;
  return (
    <>
      {/* Order Summary */}
      <div className="w-full lg:w-1/4 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold border-b pb-3">Order Summary</h2>
        <div className="py-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal || 10}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-bold">TBD</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span className="font-bold">$0.00</span>
          </div>
          <div className="flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <p className="text-sm text-gray-500">
            Or 4 interest-free installments of{" "}
            <span className="font-bold">${(subtotal / 4).toFixed(2)}</span> with
            Afterpay.
          </p>
        </div>
        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
          Proceed to Checkout
        </button>
        <button className="w-full flex justify-center items-center gap-2 mt-3 border py-3 rounded hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6"
          />
        </button>
      </div>
    </>
  );
}

export default OrderSection;
