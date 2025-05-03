import React, { useContext } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { DashBoardContext } from "../../context/contextForDashBoard";
import { RiMenuFold3Line } from "react-icons/ri";

function DashBoardHeader() {
  const {toggleSideBar,setToggleSideBar,theam,setTheam}= useContext(DashBoardContext)
  return (
    <div className="grid grid-cols-3 items-center min-h-[4rem] bg-blue-500 w-full">
      <div>
        <h1 className="text-2xl font-bold font-sans text-white">E-Shope</h1>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center w-[80%] gap-4">
        {
          !toggleSideBar? <MdOutlineMenuOpen size={"2rem"} className="rounded-[50%] p-1 bg-orange-400" color="white" onClick={()=>setToggleSideBar(true)}/> : <RiMenuFold3Line color="white" size={"2rem"} className="bg-gray-600 rounded-[50%] p-1" onClick={()=>setToggleSideBar(false)}/> 

        }       
        <div className="grid grid-cols-2">
        <input type="text" className="w-full rounded-l-md" />
        <FaSearch size={"2rem"} color="brown" className="bg-white rounded-r-md"/>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 ">
        <div className="grid grid-cols-4 gap-4">
          <CiLight size="2rem" className=" max-sm:size-[1.5rem] rounded-[50%] bg-white p-1" onClick={()=>setTheam(!theam)}/>
          <IoMdCart size="2rem" className=" max-sm:size-[1.5rem] rounded-[50%] bg-white p-1"/>
          <MdEmail size="2rem" className=" max-sm:size-[1.5rem] rounded-[50%] bg-white p-1"/>
          <IoIosNotifications size="2rem" className=" max-sm:size-[1.5rem] rounded-[50%] bg-white p-1"/>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
