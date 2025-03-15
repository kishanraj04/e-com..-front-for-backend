import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  useGetCategoryQuery,
  useGetSinglePorductQuery,
} from "../../api/apiCallingForProduct";
import { useDispatch, useSelector } from "react-redux";
// import { saveCategoryProduct, setSingleProduct } from "../../store/productSlice";
import Card3 from "../components/card/Card3";
import { isExisting } from "../helper/helper";
import {
  useAddWishListItemMutation,
  useDeleteWishListItemMutation,
  useGetAllWishListItemQuery,
} from "../../api/apiCallingForWishList";
import { handleAddToCart } from "../../utils/handleAddToCart";
import {
  useAddInCartMutation,
  useGetAllCartItemQuery,
  useRemoveFromCartMutation,
} from "../../api/apiCallingForCart";
import { handleAddToWishList } from "../../utils/handleAddToWishList";
import { handleDeleteFromWishList } from "../../utils/handleDeleteFromWishList";
import { deleteItemFromCart } from "../../utils/deleteItemFromCart";

function DetailedPage() {
  const { state } = useLocation();
  const {
    data: singleProduct,
    isSuccess,
    isError,
    isLoading,
  } = useGetSinglePorductQuery(state);
  console.log(singleProduct);
  const category = singleProduct?.product?.category;
  const {
    data: categoryData,
    isSuccess: catSuccess,
    isLoading: catLoading,
  } = useGetCategoryQuery(category);
  const [imageNumber, setImageNumber] = useState(0);
  const [addWishListItem, addWishListResp] = useAddWishListItemMutation();
  const [deleteItemFromWishList, deleteWishListResp] =
    useDeleteWishListItemMutation();
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
    const { data: wishListData } = useGetAllWishListItemQuery();
  
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  const [addInCart] = useAddInCartMutation();
  const [removeFromCart, removeRespo] = useRemoveFromCartMutation();
  console.log("IN ", imageNumber);
  return (
    // <>
    // <h1>
    //   dp
    //   </h1></>
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container mx-auto p-8 flex flex-col md:flex-row gap-10 select-none">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <img
              src={singleProduct?.product?.images[imageNumber]}
              alt={singleProduct?.title}
              className="w-full h-[25rem] rounded-lg shadow-md"
            />
            <div className="flex gap-4 mt-4 justify-center">
              {singleProduct?.product?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className="w-24 h-24 object-cover cursor-pointer border border-gray-200 hover:border-gray-600 rounded-md"
                  onClick={() => setImageNumber(index)}
                />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold">
              {singleProduct?.product?.title}
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              {Math.floor(singleProduct?.product?.price)}
            </p>
            <p className="text-gray-500 mt-4">
              {singleProduct?.product?.description}
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>{singleProduct?.product?.stock}</li>
              <li>{singleProduct?.product?.returnPolicy}</li>
              <li>{singleProduct?.product?.shipping}</li>
              <li>{singleProduct?.product?.warranty}</li>
              <li>Weight: {singleProduct?.product?.weight}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {!isExisting(
                allCartItem?.cartItem,
                singleProduct?.product?._id
              ) ? (
                <button
                  className="bg-orange-500 text-white p-2 h-[2.5rem] rounded shadow hover:bg-orange-600"
                  onClick={() =>
                    handleAddToCart(singleProduct?.product, addInCart)
                  }
                >
                  Add to Cart 🛒
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white p-2 h-[2.5rem] rounded shadow hover:bg-red-600"
                  onClick={() => deleteItemFromCart(singleProduct?.product, removeFromCart)}
                >
                  Remove from Cart
                </button>
              )}

              {!isExisting(wishListData?.wishListData, singleProduct?.product?._id) ? (
                <button
                  className="bg-white-500 text-black px-4 py-2 rounded shadow hover:bg-orange-600"
                  onClick={() => handleAddToWishList(singleProduct?.product, addWishListItem)}
                >
                  WishList ❤️
                </button>
              ) : (
                <button
                  className="bg-orange-500 text-black  px-4 py-2 rounded shadow hover:bg-orange-600"
                  onClick={() =>
                    handleDeleteFromWishList(singleProduct?.product, deleteItemFromWishList)
                  }
                >
                  Remove
                </button>
              )}
            </div>
            <p className="text-gray-500 mt-6">
              SKU: {singleProduct?.product?.sku}
            </p>
            <p className="text-gray-500">
              Categories: {singleProduct?.product?.category}
            </p>
          </div>
        </div>
      )}

      <div className="w-[100%]">
        <div>
          <h1 className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
            {singleProduct?.product?.category}
          </h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {categoryData?.data &&
              categoryData?.data?.map((product, idx) => (
                <Card3 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedPage;
