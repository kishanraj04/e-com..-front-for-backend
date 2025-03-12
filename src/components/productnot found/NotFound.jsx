import React from "react";
import notfound from '../../../public/images/notfound.jpg'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-24 text-center p-4">
      <img
        src={notfound}
        alt="Product Not Found"
        className="w-80 md:w-96 lg:w-[400px] object-contain"
      />
      <h1 className="text-2xl font-bold mt-4 text-gray-800">
        Product Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        Sorry, the product you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
