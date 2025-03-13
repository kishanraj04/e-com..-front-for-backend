import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { handleAddToCart } from "../../../utils/handleAddToCart";
import { useDispatch } from "react-redux";
import {
  useAddInCartMutation,
  useRemoveFromCartMutation,
} from "../../../api/apiCallingForCart";
import { isExisting } from "../../helper/helper";
import { deleteItemFromCart } from "../../../utils/deleteItemFromCart";
import { handleAddToWishList } from "../../../utils/handleAddToWishList";
import {
  useAddWishListItemMutation,
  useDeleteWishListItemMutation,
  useGetAllWishListItemQuery,
} from "../../../api/apiCallingForWishList";
import { RiHeartFill } from "react-icons/ri";
import { handleDeleteFromWishList } from "../../../utils/handleDeleteFromWishList";

const Card1 = ({ item, allCartItem }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [addInCart, { isError, isLoading, isSuccess }] = useAddInCartMutation();
  const [removeFromCart, removeRespo] = useRemoveFromCartMutation();
  const { data: wishListData } = useGetAllWishListItemQuery();
  const [addWishListItem, addWishListResp] = useAddWishListItemMutation();
  const [deleteItemFromWishList, deleteWishListResp] =
    useDeleteWishListItemMutation();
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-[15rem] border border-gray-200 select-none">
      {/* Product Image & Favorite Icon */}
      <div className="relative flex justify-center w-[100%]  select-none ">
        <Link to={`/home/product/detail/${item?._id}`} state={item?._id}>
          <img
            src={item?.images[0]} // Replace with actual image
            alt="Red Lipstick"
            className="w-24 h-24 object-cover"
          />
        </Link>
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-600"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {!isExisting(wishListData?.wishListData, item?._id) ? (
            <CiHeart
              onClick={() => handleAddToWishList(item, addWishListItem)}
            />
          ) : (
            <RiHeartFill
              onClick={() =>
                handleDeleteFromWishList(item, deleteItemFromWishList)
              }
            />
          )}
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{item?.title}</h3>
        <div className="flex justify-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          {item?.reviews?.length || 3} reviews
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-gray-400 line-through text-sm">$19.5</span>
          <span className="block mt-2 text-lg font-bold text-orange-500">
            {item?.price ? Math.floor(item.price) : "N/A"}
          </span>
        </div>

        {/* Add to Cart Button */}
        {!isExisting(allCartItem?.cartItem, item?._id) ? (
          <button
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
            onClick={() => handleAddToCart(item, addInCart)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-black py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
            onClick={() => deleteItemFromCart(item, addInCart)}
          >
            Remove to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card1;
