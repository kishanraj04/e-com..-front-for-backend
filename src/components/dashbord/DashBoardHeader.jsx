import React, { useContext, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiMenuFold3Line } from "react-icons/ri";
import { DashBoardContext } from "../../context/contextForDashBoard";
import { useNavigate } from "react-router";

function DashBoardHeader() {
  const { toggleSideBar, setToggleSideBar,searchValue,setSearchValue} = useContext(DashBoardContext);
  const navigate = useNavigate()
  // const [searchInput, setSearchInput] = useState("");

  return (
    <header className="bg-black text-white w-full shadow-md min-h-[4rem]">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Sidebar Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold select-none" onClick={()=>{navigate('/home')}}>E-Shope</h1>

          {/* Mobile toggle */}
          <div className="md:hidden ml-4">
            {toggleSideBar ? (
              <RiMenuFold3Line
                size="28"
                className="bg-gray-600 p-1 rounded-full cursor-pointer"
                onClick={() => setToggleSideBar(false)}
              />
            ) : (
              <MdOutlineMenuOpen
                size="28"
                className="bg-orange-400 p-1 rounded-full cursor-pointer"
                onClick={() => setToggleSideBar(true)}
              />
            )}
          </div>
        </div>

        {/* Search + Desktop Toggle */}
        <div className="flex items-center w-full md:w-auto gap-3">
          {/* Desktop toggle */}
          <div className="hidden md:block">
            {toggleSideBar ? (
              <RiMenuFold3Line
                size="28"
                className="bg-gray-600 p-1 rounded-full cursor-pointer"
                onClick={() => setToggleSideBar(false)}
              />
            ) : (
              <MdOutlineMenuOpen
                size="28"
                className="bg-orange-400 p-1 rounded-full cursor-pointer"
                onClick={() => setToggleSideBar(true)}
              />
            )}
          </div>

          {/* Search bar */}
          <div className="flex flex-grow md:flex-grow-0 w-full md:w-80">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-3 py-1 text-sm text-black rounded-l-md focus:outline-none"
              placeholder="Search products..."
            />
            <button className="bg-white px-3 rounded-r-md flex items-center justify-center">
              <FaSearch size="16" color="brown" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashBoardHeader;
