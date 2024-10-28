import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="h-screen w-full duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className=" flex space-x-2 justify-center">
        <button className="bg-blue-600 rounded-md px-2 py-1" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="bg-red-600 rounded-md px-2 py-1" onClick={() => setColor("red")}>
          Red
        </button>
      </div>
    </div>
  );
}

export default BgChanger;
