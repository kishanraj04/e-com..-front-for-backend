import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { useGetAllProductQuery } from "../../api/apiCallingForProduct";
import { getCartData } from "../../utils/getCartData";
import CartDetails from "../components/cart/CartDetails";
import OrderSection from "../components/cart/OrderSection";

const CartPage = () => {
 

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Eyeshadow Palette with Mirror",
      price: 20,
      rating: 3.28,
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
    {
      id: 2,
      name: "Annibale Colombo Sofa",
      price: 2500,
      rating: 3.08,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center gap-6">
     
      <CartDetails/>

      <OrderSection/>

    </div>
  );
};

export default CartPage;
