import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import { useGetAllProductQuery } from "../../api/apiCallingForProduct";
import { getCartData } from "../../utils/getCartData";

const CartPage = () => {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);

  const {data:allProduct,allProductResp} = useGetAllProductQuery()
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });

  const cartData = getCartData(allProduct,allCartItem)
  
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center gap-6">
      {/* Cart Items Section */}
      <div className="w-full lg:w-3/4 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">YOUR BAG ({cartItems.length} ITEMS)</h2>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Rating: {item.rating} Stars</p>
                </div>
              </div>
              <p className="font-bold">${item.price}</p>
              {/* Quantity Controls */}
              <div className="flex items-center border rounded-md">
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <FaMinus />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/4 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold border-b pb-3">Order Summary</h2>
        <div className="py-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-bold">TBD</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span className="font-bold">$0.00</span>
          </div>
          <div className="flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <p className="text-sm text-gray-500">
            Or 4 interest-free installments of{" "}
            <span className="font-bold">${(subtotal / 4).toFixed(2)}</span> with Afterpay.
          </p>
        </div>
        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
          Proceed to Checkout
        </button>
        <button className="w-full flex justify-center items-center gap-2 mt-3 border py-3 rounded hover:bg-gray-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartPage;
