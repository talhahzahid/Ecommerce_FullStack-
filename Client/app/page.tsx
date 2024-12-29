import React from "react";
import banner from "/public/Offer Banner.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Components/Card";

const page = () => {
  return (
    <>
      <div className="h-[300vh]">
        <div className="mt-4">
          <Image src={banner} alt="banner" width={1918.48} height={653.73} />
        </div>

        {/* product section */}
        <div>
          <h1 className="text-center text-xl mt-[3rem] font-bold">
            BEST SELLER
          </h1>
          <div className="flex justify-center gap-[7rem] mt-7 text-lg ">
            <h2 className="hover:text-[#40BFFF] hover:underline">
              <Link href="">All</Link>
            </h2>
            <h2 className="hover:text-[#40BFFF] hover:underline">
              <Link href="">Bags</Link>
            </h2>
            <h2 className="hover:text-[#40BFFF] hover:underline">
              <Link href="">Sneakers</Link>
            </h2>
            <h2 className="hover:text-[#40BFFF] hover:underline">
              <Link href="">Belts</Link>
            </h2>
            <h2 className="hover:text-[#40BFFF] hover:underline">
              <Link href="">Sunglasses</Link>
            </h2>
          </div>
          <Card />
          <h1 className="text-center mt-7 text-xl text-[#40BFFF] underline ">
            LOAD MORE
          </h1>
        </div>
      </div>
    </>
  );
};

export default page;
