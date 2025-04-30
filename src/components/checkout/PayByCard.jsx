import React, { useContext, useState } from "react";
import { GlobalContect } from "../../context/globalContect";

export default function PayByCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {itemPriceForOrdSum} = useContext(GlobalContect)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (cardNumber && expiry && cvv) {
      alert("Payment processed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Card Number</label>
        <div>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className={`w-full px-4 py-2 border ${
              submitted && !cardNumber ? "border-red-500" : "border-gray-300"
            } rounded outline-none`}
          />
          {submitted && !cardNumber && (
            <p className="text-sm text-red-600 mt-1">Card number is required</p>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Valid Thru</label>
          <input
            type="text"
            placeholder="MM / YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 flex items-center">
            CVV
            <span
              className="ml-1 text-gray-400 cursor-pointer"
              title="3-digit code on the back"
            >
              ❓
            </span>
          </label>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
      >
        Pay ₹{itemPriceForOrdSum}
      </button>
    </form>
  );
}
