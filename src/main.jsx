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

const AuthRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess,data} = useDirectLoginUserQuery();
  
  useEffect(() => {

    if (isSuccess) {
      dispatch(updateLoggedInUserStatus({ status: true ,name:"KKK"}));
      dispatch(loggedInUserName({loggedInUser:data.user.name}))
      navigate("/home");
    } 
  }, [isSuccess]);

  return null; 
};

const AuthLayout = ({ children }) => (
  <>
    <AuthRedirect />
    {children}
  </>
);


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <SignInSignUp />
      </AuthLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <AuthLayout>
        <App />
      </AuthLayout>
    ),
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
  </Provider>
);
