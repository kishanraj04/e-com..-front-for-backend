import React, { useContext, useState } from "react";
import { GlobalContect } from "../../context/globalContect";

const banks = [
  { name: "State Bank of India", logo: "🟦" },
  { name: "HDFC Bank", logo: "🟥" },
  { name: "ICICI Bank", logo: "🟧" },
  { name: "Kotak Mahindra Bank", logo: "🔵" },
  { name: "Axis Bank", logo: "🟥" },
  { name: "Federal Bank", logo: "🟨" },
  { name: "Indian Overseas Bank", logo: "🔷" },
];

export default function PayByNetBanking() {
  const [selectedBank, setSelectedBank] = useState("State Bank of India");
  const { itemPriceForOrdSum, setItemPriceForOrdSum } =
    useContext(GlobalContect);

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-md space-y-2">
      {banks.map((bank) => (
        <div
          key={bank?.name}
          className={`flex items-center justify-between border rounded px-4 py-3 cursor-pointer ${
            selectedBank === bank?.name ? "border-blue-500" : "border-gray-200"
          }`}
          onClick={() => setSelectedBank(bank?.name)}
        >
          <label className="flex items-center space-x-3 cursor-pointer w-full">
            <input
              type="radio"
              checked={selectedBank === bank?.name}
              onChange={() => setSelectedBank(bank?.name)}
              className="form-radio text-blue-600"
            />
            <span className="font-medium text-gray-800">{bank.name}</span>
          </label>
          <span className="text-xl">{bank?.logo}</span>
        </div>
      ))}

      <button className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded">
        Pay ₹{itemPriceForOrdSum}
      </button>
    </div>
  );
}
