import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useAddInCartMutation, useRemoveFromCartMutation } from "../../../api/apiCallingForCart";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../../utils/handleAddToCart";
import { isExisting } from "../../helper/helper";
import { deleteItemFromCart } from "../../../utils/deleteItemFromCart";

export default function Card3({ item,allCartItem }) {
  const [addInCart,{isError,isLoading,isSuccess}] = useAddInCartMutation()
  const [removeFromCart,removeResponse] = useRemoveFromCartMutation()
  
  return (
    <div className="w-64 p-4 border rounded-lg shadow-md bg-gradient-to-br from-red-50 to-white relative  select-none">
      {/* Sale Tag */}
      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
        sale
      </span>

      {/* Product Image */}
      <div className="flex justify-center mt-4">
        <Link to={`/home/product/detail/${item?._id}`} state={item?._id}>
          <img
            src={item?.images[0]}
            alt="Red Nail Polish"
            className="w-20 h-36 object-contain"
          />
        </Link>
      </div>

      {/* Product Name and Price */}
      <div className="flex justify-between items-center mt-4 px-2">
        <h2 className="text-sm font-semibold">{item?.title}</h2>
        <span className="text-sm font-bold">₹{Math.floor(item?.price)}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="text-green-600 text-2xl" >
          {
              !isExisting(allCartItem,item?._id) ? <FaCartArrowDown onClick={()=>handleAddToCart(item,addInCart)}/> : <BsCartXFill color="red" onClick={()=>deleteItemFromCart(item,removeFromCart)}/>
          }
        </button>
        <button className="text-red-500 text-2xl">
          <CiHeart />
        </button>
      </div>
    </div>
  );
}
