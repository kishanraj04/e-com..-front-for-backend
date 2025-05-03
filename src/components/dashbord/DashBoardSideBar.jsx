import React, { useContext } from "react";
import {
  MdDashboard,
  MdPerson,
  MdShoppingBag,
  MdReceipt,
} from "react-icons/md";
import { FaUser, FaBoxOpen } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { DashBoardContext } from "../../context/contextForDashBoard";
function DashBoardSideBar() {
  const { toggleSideBar, setToggleSideBar } = useContext(DashBoardContext);

  const navItems = [
    { icon: <MdDashboard size="1.5rem" />, title: "Dashboard" },
    { icon: <FaUser size="1.5rem" />, title: "User" },
    { icon: <FaBoxOpen size="1.5rem" />, title: "Product" },
    { icon: <RiFileList2Line size="1.5rem" />, title: "Invoice" },
  ];

  return (
    <div
      className={`space-y-2 transform transition-transform duration-300 ease-in-out ${
        toggleSideBar ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-gray-200 p-2 rounded w-full max-w-xs hover:bg-gray-300 transition"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default DashBoardSideBar;
