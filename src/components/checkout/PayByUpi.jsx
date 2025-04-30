import React from "react";

function PayByUpi() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4 h-full">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Add new UPI ID</span>
        <a href="#" className="text-blue-600 text-sm">
          How to find?
        </a>
      </div>
      <input
        type="text"
        placeholder="Enter your UPI ID"
        value={10}
        onChange={(e) => setUpiId(e.target.value)}
        className="border w-full px-3 py-2 rounded text-sm"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
        Verify
      </button>
      <button
        className="w-full bg-gray-700 text-white py-2 rounded text-sm"
        disabled={ 12}
      >
        Pay ₹2,559
      </button>
    </div>
  );
}

export default PayByUpi;
