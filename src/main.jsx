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
import { updateLoggedInUserStatus } from "../store/authSlice.js";
import MarketPlace from "./pages/MarketPlace.jsx";

// ✅ Corrected AuthRedirect inside Router
const AuthRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess } = useDirectLoginUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateLoggedInUserStatus({ status: true }));
      navigate("/home");
    } 
  }, [isSuccess, dispatch, navigate]);

  return null; // 🔥 This prevents rendering issues
};

const AuthLayout = ({ children }) => (
  <>
    <AuthRedirect />
    {children}
  </>
);

// ✅ Define Routes (Keeping `createBrowserRouter`)
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
      { path: "/home/:Category", element: <MarketPlace /> },
    ],
  },
]);

// ✅ Render with RouterProvider
createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <ToastContainer position="top-right" autoClose={1000} />
    <RouterProvider router={routes} />
  </Provider>
);
