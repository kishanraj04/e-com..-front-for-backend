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
import { deleteItemFromCart } from "../../../utils/deleteFromCart";

const Card1 = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [addInCart, { isError, isLoading, isSuccess }] = useAddInCartMutation();
  const [removeFromCart, removeRespo] = useRemoveFromCartMutation();
  const dispatch = useDispatch();
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
          <CiHeart />
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
        {item?.qty >= 1 ? (
          <button
            className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
            onClick={() => deleteItemFromCart(item, dispatch, removeFromCart)}
          >
            Remove To Cart
          </button>
        ) : (
          <button
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
            onClick={() => handleAddToCart(item, dispatch, addInCart)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card1;
