import React, { useContext } from "react";
import DashBoardHeader from "../components/dashbord/DashBoardHeader";
import DashBoardSideBar from "../components/dashbord/DashBoardSideBar";
import { DashBoardContext } from "../context/contextForDashBoard";

function Dashbord() {
  const { toggleSideBar, setToggleSideBar,theam} = useContext(DashBoardContext);
  return (
    <>
      <DashBoardHeader />

      <div className={`grid grid-cols-[auto_1fr] duration-700 transition-all duration-300 ${theam?"bg-black ":"bg-white"}`}>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            !toggleSideBar ? "w-60" : "w-0"
          }`}
        >
          <DashBoardSideBar />
        </div>

        <div className={`w-full transition-all duration-300 ${theam?"bg-black duration-700":"bg-white"}`}>
          {[1, 2, 3, 4, 5].map((num) => (
            <h1 key={num}>{num}</h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashbord;
