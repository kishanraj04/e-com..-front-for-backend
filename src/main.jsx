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
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Category",
        element:<CategoryPage/>
      },
      {
        path:"/",
        element:<Home/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
