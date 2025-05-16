import React, { useContext, useState } from "react";
import DashBoardHeader from "../components/dashbord/DashBoardHeader";
import DashBoardSideBar from "../components/dashbord/DashBoardSideBar";
import { DashBoardContext } from "../context/contextForDashBoard";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useDirectLoginUserQuery } from "../../api/apiCallingForUser";
import { useSelector } from "react-redux";

function Dashbord() {
  const { toggleSideBar, setToggleSideBar, theam } =
    useContext(DashBoardContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
          className={`transition-all  min-w-[100%] bg-black min-h-[91vh]  duration-300 z-50 overflow-hidden ${
            !toggleSideBar ? "min-w-[100%]" : "w-0"
          }`}
        >
          <DashBoardSideBar />
        </div>

        <div
          className={` transition-all min-w-[80%]  duration-300 ${
            !theam ? "duration-700" : "bg-white"
          }`}
        >
          {pathname == "/admin/dashboard" ? (
            <div className="w-full h-[91vh] bg-black flex justify-center items-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse text-center my-6">
                Welcome To Admin Dashboard
              </h1>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashbord;
