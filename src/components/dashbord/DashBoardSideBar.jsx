import React, { useContext, useState } from "react";
import {
  MdDashboard,
  MdPerson,
  MdShoppingBag,
  MdReceipt,
} from "react-icons/md";
import { FaUser, FaBoxOpen } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { DashBoardContext } from "../../context/contextForDashBoard";
import { Link } from "react-router";
function DashBoardSideBar() {
  const { toggleSideBar, setToggleSideBar } = useContext(DashBoardContext);
  const [toggle,setToggle] = useState('')
  const navItems = [
    { icon: <MdDashboard size="1.5rem" />, title: "Dashboard" , fields:['Ecommerce','Analytics','Crm']},
    { icon: <FaUser size="1.5rem" />, title: "User" ,fields:['Login','Register','Forget Password']},
    { icon: <FaBoxOpen size="1.5rem" />, title: "Product" ,fields:['User List','User Profile','My Account']},
    { icon: <RiFileList2Line size="1.5rem" />, title: "Invoice",fields:['Ecommerce','Analytics','Crm'] },
  ];
  return (
    <div
      className={`space-y-2 h-[25rem] w-[100%] transform transition-transform z-50 bg-transparent duration-300 ease-in-out ${
        toggleSideBar ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      {navItems.map((item, index) => (
       <div className="flex justify-center items-center flex-col">
         <div
          key={index}
          className={`${toggle==item?.title?"bg-yellow-700":""} flex items-center  gap-3 bg-gray-200 p-2 rounded w-full max-w-xs hover:bg-gray-300 transition select-none hover:text-cyan-500 font-bold `}
         onClick={(e)=>{
          if(toggle && toggle==e.target.innerText){
            setToggle('')
          }else if(toggle!=e.target.value || toggle==''){
            setToggle(e.target.innerText)
          }
         }}>
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.title}</span>
        </div>

        <div className={`${toggle!=item.title?"hidden":""} w-full flex flex-col justify-center items-center pl-4 gap-2 transition-all duration-900 ease-in-out`}>
          {
            item?.fields?.map((field)=><Link to={"/admin/dashboard/ecommerce"}>
              <p className="p-1 text-xl font-serif font-bold bg-orange-50 w-full hover:bg-orange-300 duration-500">{field}</p>
            </Link>)
          }
        </div>
       </div>
      ))}
    </div>
  );
}

export default DashBoardSideBar;
