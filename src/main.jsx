import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useGetAllCartItemQuery } from "../api/apiCallingForCart.js";
import { useGetAllProductQuery } from "../api/apiCallingForProduct.js";
import { useDirectLoginUserQuery } from "../api/apiCallingForUser.js";
import { loggedInUser, updateLoggedInUserStatus } from "../store/authSlice.js";
import App from "./App.jsx";
import SignInSignUp from "./components/LoginSignup/LoginSignUp.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Contact from "./pages/Contact.jsx";
import DetailedPage from "./pages/DetailedPage.jsx";
import Home from "./pages/Home.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import rootStore from "../store/configStore.js";
import CartPage from "./pages/CartPage.jsx";
import { updatePageNumber } from "../store/globalVariableSlic.js";
import SearchPage from "./pages/SearchPage.jsx";
import { useGetAllWishListItemQuery } from "../api/apiCallingForWishList.js";
import WishListPage from "./pages/WishListPage.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
import { GlobalProvider } from "./context/globalContect";
import Payment from "./components/checkout/Payment.jsx";
import PayByUpi from "./components/checkout/PayByUpi.jsx";
import PayByCard from "./components/checkout/PayByCard.jsx";
import PayByNetBanking from "./components/checkout/PayByNetBanking.jsx";
import PayByGiftCard from "./components/checkout/PayByGiftCard.jsx";
import Dashbord from "./pages/Dashbord.jsx";
import { DashBoardProvider } from "./context/contextForDashBoard.jsx";

export const DirectLoginAuth = () => {
  const {
    data: directLoginData,
    isError,
    isSuccess,
  } = useDirectLoginUserQuery();
  const { data: allProduct } = useGetAllProductQuery();
  const { data: wishListData } = useGetAllWishListItemQuery();

  const dispatch = useDispatch();

  if (allProduct?.isLoading) {
    return <h1>loding</h1>;
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(updatePageNumber({ pageNo: allProduct?.length }));
      dispatch(loggedInUser(directLoginData?.user));
    }
  }, [isSuccess]);
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUp />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/home/About", element: <AboutUs /> },
      { path: "/home/Contact", element: <Contact /> },
      { path: "/home/cart", element: <CartPage /> },
      { path: "/home/MarketPlace", element: <MarketPlace /> },
      { path: "/home/category/:category", element: <CategoryPage /> },
      { path: "/home/product/detail/:id", element: <DetailedPage /> },
      { path: "/home/search", element: <SearchPage /> },
      { path: "/home/wish-list", element: <WishListPage /> },
      { path: "/home/checkout", element: <CheckoutPage /> },
      { path: "/home/product/payment", element: <Payment />, children: [
        {
          path:"/home/product/payment/upi",
          element:<PayByUpi/>
        },
        {
          path:"/home/product/payment/card",
          element:<PayByCard/>
        },
        {
          path:"/home/product/payment/net-bankin",
          element:<PayByNetBanking/>
        },
        {
          path:"/home/product/payment/gift-card",
          element:<PayByGiftCard/>
        }
      ] },
    ],
  },
  {
    path:'/admin/dashboard',
    element:<DashBoardProvider><Dashbord/></DashBoardProvider>
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <ToastContainer position="top-right" autoClose={1000} />
    <RouterProvider router={routes} />
    <DirectLoginAuth />
  </Provider>
);
