import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { GlobalContect } from "../../context/globalContect";

export default function Payment() {
  const [selectedOption, setSelectedOption] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const { itemPriceForOrdSum } = useContext(GlobalContect);

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-12">
        {/* Left - Payment Options */}
        <div className="md:col-span-4 border-r p-4">
          <div className="space-y-4">
            {[
              ["UPI", "/home/product/payment/upi"],
              ["Credit / Debit / ATM Card", "/home/product/payment/card"],
              ["Net Banking", "/home/product/payment/net-bankin"],
              ["Have a Flipkart Gift Card?", "/home/product/payment/gift-card"],
              ["Cash on Delivery","/home/product/payment/cash-on-delivery"],
            ].map((item) => (
              <div
                key={item}
                className={`p-4 rounded cursor-pointer border select-none ${
                  selectedOption === item[0]
                    ? "border-blue-500 bg-blue-500"
                    : "hover:shadow"
                }`}
                onClick={() => {
                  navigate(item[1]);
                  ![].includes(item[0]) &&
                    setSelectedOption(item[0]);
                }}
              >
                <h4 className="font-semibold text-sm">{item[0]}</h4>
                {item[0] === "UPI" && (
                  <p className="text-xs text-gray-500">Pay by any UPI app</p>
                )}
                {item[0] === "Credit / Debit / ATM Card" && (
                  <>
                    <p className="text-xs text-gray-500">
                      Add and secure cards as per RBI guidelines
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                    </p>
                  </>
                )}
                {item[0] === "EMI" && (
                  <p className="text-xs text-gray-500">
                    Get Debit and Cardless EMIs on HDFC Bank
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center - UPI Form Block */}
        <div className="md:col-span-4 border-r p-4">
          <Outlet />
        </div>

        {/* Right - Summary */}
        <div className="md:col-span-4 p-4 space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Price Details</h4>
            <div className="flex justify-between text-sm mb-2">
              <span>Price </span>
              <span>₹{itemPriceForOrdSum}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Delivery Charges</span>
              <span className="text-green-600">FREE</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Platform fee</span>
              <span>₹3</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span>₹{itemPriceForOrdSum+3}</span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-green-800 font-semibold text-sm">
                5% Cashback
              </p>
              <p className="text-xs text-green-600">
                Claim now with payment offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
