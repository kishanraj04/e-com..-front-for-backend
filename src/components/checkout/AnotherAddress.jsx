import React from "react";

function AnotherAddress({ address }) {
  return (
    <>
      {/* Another Address */}
      <div className="border rounded-lg p-4 flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input type="radio" name="address" />
          <div>
            <p className="font-semibold">
              {address?.name}
              <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">
                {address?.addressType}
              </span>{" "}
              {address?.contact}
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          {address?.address}
          <span className="font-bold">{address?.pincode}</span>
        </p>
      </div>
    </>
  );
}

export default AnotherAddress;
