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
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../../../utils/logoutUser";
import { useLogOutUserMutation } from "../../../api/apiCallingForUser";
import { useDispatch } from "react-redux";
function DashBoardSideBar() {
  const { toggleSideBar, setToggleSideBar } = useContext(DashBoardContext);
  const [toggle,setToggle] = useState('')
  const dispatch = useDispatch()
    const [logOutUser, { isError, isSuccess, data }] = useLogOutUserMutation();
  const navigate = useNavigate();
  const navItems = [
    { icon: <MdDashboard size="1.5rem" />, title: "Dashboard" , fields:['Ecommerce','Analytics']},
    { icon: <FaUser size="1.5rem" />, title: "User" ,fields:['Logout','Forget Password','User List']},
    { icon: <FaBoxOpen size="1.5rem" />, title: "Product" ,fields:['All Product','Add Product']},
    { icon: <RiFileList2Line size="1.5rem" />, title: "Invoice",fields:['Ecommerce','Analytics','Crm'] },
  ];
  return (
    <div
      className={`space-y-2 transform transition-transform  min-w-[15rem] duration-700 ease-in-out max-sm:min-w-[10rem] ${
        toggleSideBar ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      {navItems.map((item, index) => (
       <div className="flex justify-center items-center flex-col w-full ">
         <div
          key={index}
          className={`${toggle==item?.title?"bg-cyan-300":""} flex items-center gap-3 bg-gray-200 w-full p-2 rounded  hover:bg-gray-300 transition select-none hover:text-cyan-500 font-bold `}
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

        <div className={`${toggle!=item.title?"hidden":""} w-full flex flex-col  pl-4 gap-2 transition-all duration-900 ease-in-out`}>
          
           {item?.fields?.map((field) =>
  field === "Logout" ? (
    <p
      key={field}
      className="p-1 text-xl font-serif font-bold bg-orange-50 w-full hover:bg-orange-300 duration-500"
      onClick={async () => {
        const resp = await logoutUser(logOutUser, navigate, dispatch);
        console.log(resp);
      }}
    >
      {field}
    </p>
  ) : (
    <Link key={field} to={`/admin/dashboard/${field}`}>
      <p className="p-1 text-xl font-serif font-bold bg-orange-50 w-full hover:bg-orange-300 duration-500">
        {field}
      </p>
    </Link>
  )
)}

          
        </div>
       </div>
      ))}
    </div>
  );
}

export default DashBoardSideBar;
