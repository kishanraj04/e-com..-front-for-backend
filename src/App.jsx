import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  );
}

export default App;
