import React, { useContext } from "react";
import DashBoardHeader from "../components/dashbord/DashBoardHeader";
import DashBoardSideBar from "../components/dashbord/DashBoardSideBar";
import { DashBoardContext } from "../context/contextForDashBoard";
import { Outlet } from "react-router";

function Dashbord() {
  const { toggleSideBar, setToggleSideBar, theam } =
    useContext(DashBoardContext);
  return (
    <>
      <DashBoardHeader />

      <div
        className={`grid h-[25rem]  grid-cols-[auto_1fr] w-full duration-700 bg-transparent  transition-all duration-300 ${
          theam ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`transition-all h-[25rem]  duration-300 z-50 overflow-hidden ${
            !toggleSideBar ? "w-[100%]" : "w-0"
          }`}
        >
          <DashBoardSideBar />
        </div>

        <div
          className={`w-full transition-all duration-300 ${
            theam ? "bg-black duration-700" : "bg-white"
          }`}
        >
            <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
