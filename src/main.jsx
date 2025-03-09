import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import SignInSignUp from "./components/LoginSignup/LoginSignUp.jsx";
import { useDirectLoginUserQuery } from "../api/apiCallingForUser.js";
import rootStore from "../store/configStore.js";
import { loggedInUserName, updateLoggedInUserStatus } from "../store/authSlice.js";
import MarketPlace from "./pages/MarketPlace.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import DetailedPage from "./pages/DetailedPage.jsx";
import { useGetAllCartItemQuery } from "../api/apiCallingForCart.js";
import { addToCart } from "../store/cartSlice.js";
import { useGetAllProductQuery } from "../api/apiCallingForProduct.js";
import { saveAllProduct } from "../store/productSlice.js";


export const DirectLoginAuth = () => {
  const { data: directLoginData, isError, isSuccess } = useDirectLoginUserQuery();
  const { data: allProduct, allProResp } = useGetAllProductQuery();
  
  // Ensure the query only runs when _id is available
  const { data: allCartItem, cartResp, refetch } = useGetAllCartItemQuery(
    directLoginData?.user?._id,
    { skip: !directLoginData?.user?._id }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveAllProduct({ data: allProduct?.product }));
    console.log("ua ", allCartItem);
    dispatch(addToCart({ data: allCartItem?.cartItem?.cartItem }));
    
    // ✅ Only refetch if `refetch` is available
    if (refetch && directLoginData?.user?._id) {
      refetch();
    }
  }, [allProResp, allProduct, dispatch, allCartItem]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateLoggedInUserStatus(directLoginData?.user));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (allCartItem) {
      console.log("Cart data updated:", allCartItem);
    }
  }, [allCartItem]);
};



const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUp />
  },
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/home/About", element: <AboutUs /> },
      { path: "/home/Contact", element: <Contact /> },
      { path: "/home/MarketPlace", element: <MarketPlace /> },
      {path:"/home/category/:category",element:<CategoryPage/>},
      {path:"/home/product/detail/:id",element:<DetailedPage/>}
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <ToastContainer position="top-right" autoClose={1000} />
    <RouterProvider router={routes} />
    <DirectLoginAuth/>
  </Provider>
);
