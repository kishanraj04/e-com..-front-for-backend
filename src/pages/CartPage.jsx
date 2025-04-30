import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { useGetAllProductQuery } from "../../api/apiCallingForProduct";
import { getCartData } from "../../utils/getCartData";
import CartDetails from "../components/cart/CartDetails";
import OrderSection from "../components/cart/OrderSection";

const CartPage = () => {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  console.log(allCartItem);
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center gap-6">
      <CartDetails />

      <OrderSection allCartItem={allCartItem?.cartItem}/>
    </div>
  );
};

export default CartPage;
