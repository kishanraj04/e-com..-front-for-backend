import React, { useContext, useEffect, useState } from "react";
import { useGetAllCartItemQuery } from "../../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { priceForOrderSummary, totalPrice } from "../../helper/helper";
import { Link } from "react-router";
import { GlobalContect } from "../../context/globalContect";

function OrderSection({ allCartItem, flagForOrderSummary }) {
  const { itemPriceForOrdSum, setItemPriceForOrdSum,totalPrices, setToatalPrice } =
    useContext(GlobalContect);
  useEffect(() => {
    if (flagForOrderSummary) {
      setToatalPrice(priceForOrderSummary(allCartItem));
      setItemPriceForOrdSum(Math.floor(priceForOrderSummary(allCartItem)));
    } else {
      setToatalPrice(totalPrice(allCartItem));
    }
  }, [allCartItem]);

  // const totalprice = totalPrice(allCartItem)
  return (
    <>
      {/* Order Summary */}
      <div className="w-full lg:w-1/4 bg-white shadow rounded-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold border-b pb-3">Order Summary</h2>
        <div className="py-4 space-y-3 text-sm sm:text-base">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">${Math.floor(totalPrices) || 10}</span>
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
            <span>${Math.floor(totalPrices)}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Or 4 interest-free installments of{" "}
            <span className="font-bold">
              ${(Math.floor(totalPrices) / 4).toFixed(2)}
            </span>{" "}
            with Afterpay.
          </p>
        </div>

        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 text-sm sm:text-base mt-4">
          <Link to="/home/checkout">Proceed to Checkout</Link>
        </button>

        <button className="w-full flex justify-center items-center gap-2 mt-3 border py-3 rounded hover:bg-gray-100 text-sm">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-5 sm:h-6"
          />
        </button>
      </div>
    </>
  );
}

export default OrderSection;
