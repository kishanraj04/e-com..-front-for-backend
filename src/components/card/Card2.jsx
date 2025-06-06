import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { handleAddToCart } from "../../../utils/handleAddToCart";
import { useDispatch, useSelector } from "react-redux";
import { isExisting } from "../../helper/helper";
import {
  useAddInCartMutation,
  useRemoveFromCartMutation,
} from "../../../api/apiCallingForCart";
import { RiHeartFill } from "react-icons/ri";
import { deleteItemFromCart } from "../../../utils/deleteItemFromCart";
import { handleAddToWishList } from "../../../utils/handleAddToWishList";
import {
  useAddWishListItemMutation,
  useDeleteWishListItemMutation,
  useGetAllWishListItemQuery,
} from "../../../api/apiCallingForWishList";
import { handleDeleteFromWishList } from "../../../utils/handleDeleteFromWishList";

export default function Card2({ item, allCartItem }) {
  const userId = useSelector((state) => state?.auth?.loggedInUserName?._id);
  const [addInCart, cartResp] = useAddInCartMutation();
  const [removeFromCart, respStatus] = useRemoveFromCartMutation();
  const [addWishListItem, addWishListResp] = useAddWishListItemMutation();
  const { data: wishListData } = useGetAllWishListItemQuery();
  const [deleteItemFromWishList, deleteWishListResp] =
    useDeleteWishListItemMutation();

  return (
    <div className="w-full p-4 border rounded-lg shadow-md bg-gradient-to-br from-yellow-50 to-red-50 relative select-none">

      {/* Product Name and Quantity */}
      <div className="flex justify-between items-start">
        <h2 className="font-semibold">{item?.title}</h2>
        <span className="text-sm font-medium">3</span>
      </div>

      {/* Product Image with Price Tag */}
      <div className="relative flex justify-center mt-4">
        <div className="w-24 h-36 border-2 border-black rounded-full flex items-center justify-center overflow-hidden">
          <Link to={`/home/product/detail/${item?._id}`} state={item?._id}>
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="object-cover select-none"
            />
          </Link>
        </div>
        <span className="absolute top-0 right-10 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          ₹{item?.price ? Math.floor(item?.price) : "N/A"}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="text-green-600 text-2xl">
          {!isExisting(allCartItem, item?._id) ? (
            <FaCartArrowDown onClick={() => handleAddToCart(item, addInCart)} />
          ) : (
            <BsCartXFill
              color="red"
              onClick={() => deleteItemFromCart(item, removeFromCart)}
            />
          )}
        </button>
        <button className="text-red-500 text-2xl">
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
    </div>
  );
}
