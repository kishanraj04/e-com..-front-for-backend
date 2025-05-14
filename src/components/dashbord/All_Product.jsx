import React, { useContext, useState } from "react";
import { useDeleteSingleProductMutation,  useShowMoreProdQuery } from "../../../api/apiCallingForProduct";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";
import { DashBoardContext } from "../../context/contextForDashBoard";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    discountPercentage: 15,
    rating: 4.5,
    stock: 120,
    returnPolicy: "10 days return",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Running Shoes",
    category: "Footwear",
    price: 49.99,
    discountPercentage: 10,
    rating: 4.2,
    stock: 80,
    returnPolicy: "7 days return",
  },
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    discountPercentage: 15,
    rating: 4.5,
    stock: 120,
    returnPolicy: "10 days return",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Running Shoes",
    category: "Footwear",
    price: 49.99,
    discountPercentage: 10,
    rating: 4.2,
    stock: 80,
    returnPolicy: "7 days return",
  },
  // Add more products...
];

const All_Product = () => {
  const [rangeVal, setRangeVal] = useState(1);
  const [deleteSingleProd,deletedResp] = useDeleteSingleProductMutation()
  const { data: moreProd, isLoading: moreProdLoading } =
    useShowMoreProdQuery(rangeVal);
  const {searchValue} = useContext(DashBoardContext)

  const handleUpdate = (id) => {
    console.log("Update product:", id);
  };

  const handleDelete = async(id) => {
    try {
      const resp = await deleteSingleProd(id)
      if(resp){
        toast.success("product deleted")
      }
    } catch (error) {
      
    }
  };

  return (
    <>
      {moreProdLoading ? (
        <Spinner />
      ) : (
        <div className="p-6 bg-gray-50 min-h-screen">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {moreProd?.products?.filter((item)=>item?.title?.toLowerCase().includes(searchValue))?.map((prod, idx) => (
              <div
                key={prod?._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={prod?.images[0]}
                    alt={prod?.title}
                    className="w-24 h-24 rounded-xl object-cover border"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {prod?.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{prod?.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
                  <div className="font-medium">Price:</div>
                  <div>${prod?.price.toFixed(2)}</div>

                  <div className="font-medium">Discount:</div>
                  <div className="text-red-600">
                    {prod?.discountPercentage}%
                  </div>

                  <div className="font-medium">Rating:</div>
                  <div>{prod?.rating}</div>

                  <div className="font-medium">Stock:</div>
                  <div>{prod?.stock}</div>

                  <div className="font-medium col-span-2">Return Policy:</div>
                  <div className="col-span-2">{prod?.returnPolicy}</div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => handleUpdate(prod?._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(prod?._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end p-4">
            <button
              className={`bg-orange-300 p-3 rounded-lg font-bold text-xl hover:bg-blue-500 text-white duration-500 ${
                moreProd?.success === false
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={moreProd?.success === false}
              onClick={() => setRangeVal((prev) => prev + 1)}
            >
              Show More Product
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default All_Product;
