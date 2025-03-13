import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import {
  useAddInCartMutation,
  useRemoveFromCartMutation,
} from "../../../api/apiCallingForCart";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../../utils/handleAddToCart";
import { deleteItemFromCart } from "../../../utils/deleteItemFromCart";
import { isExisting } from "../../helper/helper";
import { handleAddToWishList } from "../../../utils/handleAddToWishList";
import { useAddWishListItemMutation, useGetAllWishListItemQuery } from "../../../api/apiCallingForWishList";
export default function Card4({ item, allCartItem }) {
  const [addInCart, { isError, isLoading, isSuccess }] = useAddInCartMutation();
  const [removeFromCart, removeRespo] = useRemoveFromCartMutation();
  const { data: wishListData } = useGetAllWishListItemQuery();
  const [addWishListItem, addWishListResp] = useAddWishListItemMutation();
  return (
    <div className="w-64 p-6 border rounded-lg shadow-md bg-gradient-to-br from-yellow-50 to-white text-center  select-none">
      {/* Product Image */}
      <div className="flex justify-center">
        <Link to={`/home/product/detail/${item?._id}`} state={item?._id}>
          <img
            src={item?.images[0]}
            alt="Eyeshadow Palette"
            className="w-32 h-32 object-contain"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center p-3">
        {/* Product Name */}
        <h2 className="mt-4 text-md font-semibold">{item?.title}</h2>

        {/* Price */}
        <span className="block mt-2 text-lg font-bold text-orange-500">
          {item?.price ? Math.floor(item.price) : "N/A"}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        {!isExisting(allCartItem, item?._id) ? (
          <button
            className="bg-orange-500 text-white p-2 h-[2.5rem] rounded shadow hover:bg-orange-600"
            onClick={() => handleAddToCart(item, addInCart)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="bg-red-500 text-white p-2 h-[2.5rem] rounded shadow hover:bg-red-600"
            onClick={() => deleteItemFromCart(item, removeFromCart)}
          >
            Remove from Cart
          </button>
        )}

        {!isExisting(wishListData?.wishListData, item?._id) ? (
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600"
            onClick={() => handleAddToWishList(item, addWishListItem)}
          >
            WishList
          </button>
        ) : (
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600">
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
