"use client";
import React, { useState } from "react";
const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="flex flex-col ml-[13rem] mt-2">

      <div className="flex gap-4 items-center space-x-1">
      <h1 className="font-semibold mb-1">Select a Color :</h1>
        {/* Red Color Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="color"
            value="red"
            checked={selectedColor === "red"}
            onChange={handleColorChange}
            className="hidden"
          />
          <span
            className={`h-8 w-8 rounded-full block ${
              selectedColor === "red" ? "border-4 border-red-600" : "bg-red-500"
            }`}
          />
        </label>

        {/* Blue Color Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="color"
            value="blue"
            checked={selectedColor === "blue"}
            onChange={handleColorChange}
            className="hidden"
          />
          <span
            className={`h-8 w-8 rounded-full block ${
              selectedColor === "blue"
                ? "border-4 border-blue-600"
                : "bg-blue-500"
            }`}
          />
        </label>

        {/* Yellow Color Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="color"
            value="yellow"
            checked={selectedColor === "yellow"}
            onChange={handleColorChange}
            className="hidden"
          />
          <span
            className={`h-8 w-8 rounded-full block ${
              selectedColor === "yellow"
                ? "border-4 border-yellow-600"
                : "bg-yellow-500"
            }`}
          />
        </label>

        {/* Black Color Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="color"
            value="black"
            checked={selectedColor === "black"}
            onChange={handleColorChange}
            className="hidden"
          />
          <span
            className={`h-8 w-8 rounded-full block ${
              selectedColor === "black" ? "border-4 border-black" : "bg-black"
            }`}
          />
        </label>
      </div>
      <div>
      <div className="dropdown dropdown-top dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Size</div>
  <ul tabIndex={0} className="dropdown-content menu text-white bg-[black] rounded-box z-[1] w-30 p-2 shadow">
    <li><a>Xl</a></li>
    <li><a>Lg</a></li>
    <li><a>Md</a></li>
    <li><a>Sm</a></li>
  </ul>
</div>
      </div>
    </div>
  );
};

export default SelectColor;
