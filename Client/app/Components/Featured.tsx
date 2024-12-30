import React from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "@/public/Vector.png";

const Featured = () => {
  return (
    <>
      <h1 className="text-center mt-[4rem] text-xl font-semibold">
        FEATURED PRODUCTS
      </h1>

      <div className="flex justify-around flex-wrap mt-[4rem]">
        {/* Product 1 */}
        <div className="flex items-center gap-7 mb-8">
          <Image src={vector} alt="Blue Swade Nike Sneakers" />
          <div>
            <h1 className="text-lg">
              Blue Swade Nike <br /> Sneakers
            </h1>
            <h2>
              $499 <span className="text-red-400 line-through">$999</span>
            </h2>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex items-center gap-7 mb-8">
          <Image src={vector} alt="Blue Swade Nike Sneakers" />
          <div>
            <h1 className="text-lg">
              Blue Swade Nike <br /> Sneakers
            </h1>
            <h2>
              $499 <span className="text-red-400 line-through">$999</span>
            </h2>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex items-center gap-7 mb-8">
          <Image src={vector} alt="Blue Swade Nike Sneakers" />
          <div>
            <h1 className="text-lg">
              Blue Swade Nike <br /> Sneakers
            </h1>
            <h2>
              $499 <span className="text-red-400 line-through">$999</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
