import React from "react";
import banner from "/public/Offer Banner.png";
import logo from "@/public/logo.png";
import mainimage from "@/public/main-image.png";
import shipping from "@/public/shipping.png";
import refund from "@/public/refund.png";
import path from "@/public/Path 4.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Components/Card";
import Fotter from "./Components/Fotter";
import Featured from "./Components/Featured";
import News from "./Components/News";
import Search from "./Components/Search";
import Shippingdetails from "./Components/Shippingdetails";

const page = () => {
  return (
    <>
      {/* // banner image  */}
      <div>
        <div className="mt-7">
          <Image src={banner} alt="banner" width={1918.48} height={653.73} />
        </div>

        {/* product section */}
        <div>
        <div>
  <h1 className="text-center text-xl mt-[3rem] font-bold">
    BEST SELLER
  </h1>
  <div className="flex flex-wrap justify-center gap-[3rem] mt-7 text-lg">
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
</div>


          <Card />
        </div>
        <h1 className="text-center mt-7 text-lg text-[#40BFFF]  font-semibold hover:underline">
          LOAD MORE
        </h1>
        {/* main section design  */}
        <div className="bg-[#40BFFF] flex justify-center items-center flex-wrap mt-10">
          <div className="text-white">
            <h1 className="text-[45px]">
              Adidas Men Running <br /> Sneakers
            </h1>{" "}
            <br />
            <p className="text-xl">
              Performance and design. Taken right to the edge.
            </p>
            <button className="text-xl">Shop Now</button>
          </div>
          <div>
            <Image
              src={mainimage}
              alt="loading.."
              width={794.56}
              height={598.94}
              className="transform scale-x-[-1]"
            />
          </div>
        </div>
        {/* main section design  */}

        <Shippingdetails />
        <News />
        <Featured />
        <Search />
        <Fotter />
      </div>
    </>
  );
};

export default page;
