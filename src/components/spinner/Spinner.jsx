import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-20 h-20">
        <div className="absolute left-2 w-4 bg-current animate-loader delay-[-0.24s]"></div>
        <div className="absolute left-8 w-4 bg-current animate-loader delay-[-0.12s]"></div>
        <div className="absolute left-14 w-4 bg-current animate-loader"></div>
      </div>
    </div>
  );
}

export default Spinner;
