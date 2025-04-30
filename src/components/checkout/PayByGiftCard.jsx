import React, { useContext, useState } from "react";
import { GlobalContect } from "../../context/globalContect";

export default function PayByGiftCard() {
  const [voucherNumber, setVoucherNumber] = useState("");
  const [voucherPin, setVoucherPin] = useState("");
  const { itemPriceForOrdSum, setItemPriceForOrdSum } =
    useContext(GlobalContect);

  const handleAddGiftCard = () => {
    alert(`Voucher Number: ${voucherNumber}\nVoucher PIN: ${voucherPin}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-sm">
      <p className="text-sm text-gray-600 mb-4">
        Up to 15 gift cards can be added per transaction
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Voucher Number
        </label>
        <input
          type="text"
          placeholder="Enter voucher number"
          value={voucherNumber}
          onChange={(e) => setVoucherNumber(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Voucher PIN
        </label>
        <input
          type="password"
          placeholder="Enter voucher PIN"
          value={voucherPin}
          onChange={(e) => setVoucherPin(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleAddGiftCard}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        Add Gift Card
      </button>
    </div>
  );
}
