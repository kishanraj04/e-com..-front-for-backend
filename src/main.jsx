import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Home from "./pages/Home.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import SignInSignUp from "./components/LoginSignup/LoginSignUp.jsx";
import { apicallingForOrder } from "../api/apiCallingForOrder.js";
import { apicallingForProduct } from "../api/apiCallingForProduct.js";
import { apicallingForUser } from "../api/apiCallingForUser.js";
import { Provider } from "react-redux";
import rootStore from "../store/configStore.js";
import { ToastContainer } from "react-toastify";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUp />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path:'/home',
        element:<Home/>
      },
      {
        path: "/home/About",
        element: <AboutUs />,
      },
      {
        path:"/home/Contact",
        element:<Contact/>
      },
      {
        path:"/home/:Category",
        element:<CategoryPage/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <ToastContainer position="top-right" autoClose={1000} />
    <RouterProvider router={routes} />
  </Provider>
);
