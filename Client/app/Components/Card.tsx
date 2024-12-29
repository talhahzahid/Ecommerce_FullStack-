"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import product from "@/public/product1.png";
const Card = () => {
  return (
    <>
      <div className="mt-7 flex justify-center flex-wrap gap-7 ">
        {/* card design */}
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={product}
            alt="Nike Air Max 270 React"
            width={299.5}
            height={272.5}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h2 className="text-[18px]">Nike Air Max 270 React</h2>
            <h2 className="flex items-center justify-center gap-3">
              <span className="text-[#40BFFF] font-semibold">$299,43</span>
              <span className="text-gray-400 line-through text-sm ">
                $534,33
              </span>
              <span className="text-red-500 font-semibold text-sm">
                24% Off
              </span>
            </h2>
          </div>
        </div>
        {/* card desgin end  */}
      </div>
    </>
  );
};

export default Card;
