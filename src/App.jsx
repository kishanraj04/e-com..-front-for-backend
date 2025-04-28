import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import { GlobalProvider } from "./context/globalContect.jsx";



function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <GlobalProvider>
      <AuthLayout>
      <Navbar />
        <Outlet />
      <Footer/>
      </AuthLayout>
      </GlobalProvider>
    </>
  );
}

export default App;
