import Link from "next/link";
import React from "react";
import shoes from "@/public/shoes.png";
import Image from "next/image";
import SelectColor from "@/app/Components/Selectcolor";

const Page = () => {
  return (
    <>
      {/* Title Section */}
      <h1 className="text-center text-[#40BFFF] bg-[#F6F7F8] mt-7 p-3 text-lg font-semibold">
        <Link href="/" className="hover:text-[#40BFFF]">
          Home
        </Link>{" "}
        / Hot Deal
      </h1>

      {/* Product Section */}
      <div className="mt-7 mx-8 p-6 border border-gray-300 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          {/* Left Image Section */}
          <div className="flex-shrink-0">
            <Image
              src={shoes}
              alt="Nike Airmax 270 React"
              width={200}
              height={200}
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow pl-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Nike Airmax 270 React
            </h1>
            <h3 className="text-lg text-gray-600">Submit Review</h3>
            <hr className="my-2" />
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold">
                <span className="text-[#40BFFF]">@299,43</span>
                <span className="text-[#9098B1] line-through">#434,33</span>
                <span className="text-red-500 ml-2">24% Off</span>
              </h1>
            </div>
            <div className="mt-4 text-gray-700">
              <h2 className="text-sm">
                Availability: <span className="font-semibold">In Stock</span>
              </h2>
              <h2 className="text-sm">
                Category: <span className="font-semibold">Accessories</span>
              </h2>
              <h2 className="text-sm">
                Shipping: <span className="font-semibold">Free Shipping</span>
              </h2>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-shrink-0">
            <Image
              src={shoes}
              alt="Nike Airmax 270 React"
              width={200}
              height={200}
            />
          </div>
        </div>
        <hr />
        <SelectColor />
        <br />
        <hr />
        {/* <SelectColor /> */}
      </div>
    </>
  );
};

export default Page;
