import React, { useContext, useState } from "react";
import DashBoardHeader from "../components/dashbord/DashBoardHeader";
import DashBoardSideBar from "../components/dashbord/DashBoardSideBar";
import { DashBoardContext } from "../context/contextForDashBoard";
import { Outlet, useNavigate } from "react-router";
import { useDirectLoginUserQuery } from "../../api/apiCallingForUser";
import { useSelector } from "react-redux";

function Dashbord() {
  const { toggleSideBar, setToggleSideBar, theam } =
    useContext(DashBoardContext);
      const navigate = useNavigate()

  
  const {
      data: directLoginData,
      isError,
      isSuccess,
    } = useDirectLoginUserQuery();
  return (
    <>
      <DashBoardHeader />

      <div
        className={`grid h-[25rem] w-[100%]  grid-cols-[auto_1fr] duration-700 bg-transparent  transition-all  ${
          theam ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`transition-all h-[25rem] min-w-[100%]  duration-300 z-50 overflow-hidden ${
            !toggleSideBar ? "min-w-[100%]" : "w-0"
          }`}
        >
          <DashBoardSideBar />
        </div>

        <div
          className={` transition-all min-w-[80%]  duration-300 ${
            !theam ? "bg-black duration-700" : "bg-white"
          }`}
        >
            <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
