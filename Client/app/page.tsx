import React from "react";
import banner from "/public/Offer Banner.png";
import logo from "@/public/logo.png";
import mainimage from "@/public/main-image.png";
import shipping from "@/public/shipping.png";
import refund from "@/public/refund.png";
import path from "@/public/Path 4.png";
import figma from "@/public/figma-1-logo 1.png";
import nike from "@/public/Nike_logo_emblem_logotype 1.png";
import kronos from "@/public/kronos-logo-1-1 1.png";
import vector from "@/public/Vector.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Components/Card";
import brand from "@/public/Brands.png";

const page = () => {
  return (
    <>
      <div>
        <div className="mt-7">
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
        {/* shipping detail start */}
        <div className="flex justify-around items-center gap-10 flex-wrap mt-[4rem]">
          <div className="">
            <Image
              src={shipping}
              alt="loading..."
              width={100}
              className="m-auto"
            />
            <h1 className="text-xl font-semibold mt-7">FREE SHIPPING</h1>
            <p>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </p>
          </div>
          <div>
            <Image
              src={refund}
              alt="loading..."
              width={100}
              className="m-auto"
            />
            <h1 className="text-xl font-semibold mt-7">FREE SHIPPING</h1>
            <p>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </p>
          </div>
          <div className="">
            <Image src={path} alt="loading..." width={100} className="m-auto" />
            <h1 className="text-xl font-semibold mt-7">FREE SHIPPING</h1>
            <p>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </p>
          </div>
        </div>
        {/* shipping detail end */}
        {/* news section start */}
        <h1 className="text-center mt-[4rem] text-xl font-semibold">
          LATEST NEWS
        </h1>
        <div className="flex justify-around flex-wrap gap-8 mt-10">
          <div className="flex items-center">
            <Image src={nike} alt="loading..." />
            <div>
              <h1 className="text-xl font-semibold">Fashion Industry</h1>
              <h2>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <Image src={figma} alt="loading..." />
            <div>
              <h1 className="text-xl font-semibold">Fashion Industry</h1>
              <h2>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <Image src={kronos} alt="loading..." />
            <div>
              <h1 className="text-xl font-semibold">Fashion Industry</h1>
              <h2>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </h2>
            </div>
          </div>
        </div>
        {/* news section end */}
        {/* featured section start */}
        <h1 className="text-center mt-[4rem] text-xl font-semibold">
          FEATURED PRODUCTS
        </h1>
        <div className="flex justify-around flex-wrap mt-[4rem]">
          <div className="flex items-center gap-7">
            <Image src={vector} alt="loading../" />
            <div>
              <h1>
                Blue Swade Nike <br /> Sneakers
              </h1>
              <h2>
                $499 <span className="text-red-400 line-through">$999</span>
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Image src={vector} alt="loading../" />
            <div>
              <h1>
                Blue Swade Nike <br /> Sneakers
              </h1>
              <h2>
                $499 <span className="text-red-400 line-through">$999</span>
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Image src={vector} alt="loading../" />
            <div>
              <h1>
                Blue Swade Nike <br /> Sneakers
              </h1>
              <h2>
                $499 <span className="text-red-400 line-through">$999</span>
              </h2>
            </div>
          </div>
        </div>
        {/* featured section end */}
        {/* search section start */}
        <div className="text-center mt-[4rem]">
          <input
            type="text"
            id=""
            className="border border-[#40BFFF] p-2  w-full max-w-lg"
            placeholder="Serach Qurey"
          />
          <button className="border  border-[#40BFFF] bg-[#40BFFF] p-2">
            Search
          </button>
        </div>
        {/* search section end */}
        {/* footer section start */}
        <div className="border border-[#BCDDFE] bg-[#BCDDFE] mt-10 h-[80vh]">
          <div className="flex justify-around m-10">
            <div>
              <Image src={logo} alt="loading.." />
              <h2 className="mt-2">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry. Lorem <br /> Ipsum has been the industry's
                standard <br /> dummy text ever.Since the 1500s, when <br /> an
                unknown printer.
              </h2>
            </div>
            <div>
              <h1 className="text-2xl">Follow Us</h1>
              <h2 className="mt-2">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry. Lorem <br /> Ipsum has been the industry's
                standard <br /> dummy text ever.Since the 1500s, when <br /> an
                unknown printer.
              </h2>
            </div>
            <div>
              <h1 className="text-2xl">Contact Us</h1>
              <h2 className="mt-2">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry. Lorem <br /> Ipsum has been the industry's
                standard <br /> dummy text ever.Since the 1500s, when <br /> an
                unknown printer.
              </h2>
            </div>
          </div>
          <br />
          <div className="flex justify-around m-2">
            <div>
              <h1 className="text-xl font-semibold">Information</h1>
              <h2 className="mt-2">
                <Link href="">About Us</Link>
              </h2>
              <h2>
                <Link href="">Information</Link>
              </h2>
              <h2>
                <Link href="">Privacy Policy</Link>
              </h2>
              <h2>
                <Link href="">Term $ condition</Link>
              </h2>
            </div>
            <div>
              <h1 className="text-xl font-semibold">About Us</h1>
              <h2 className="mt-2">
                <Link href="">About Us</Link>
              </h2>
              <h2>
                <Link href="">Information</Link>
              </h2>
              <h2>
                <Link href="">Privacy Policy</Link>
              </h2>
              <h2>
                <Link href="">Term $ condition</Link>
              </h2>
            </div>
            <div>
              <h1 className="text-xl font-semibold"> My Account</h1>
              <h2 className="mt-2">
                <Link href="">About Us</Link>
              </h2>
              <h2>
                <Link href="">Information</Link>
              </h2>
              <h2>
                <Link href="">Privacy Policy</Link>
              </h2>
              <h2>
                <Link href="">Term $ condition</Link>
              </h2>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Our Offer</h1>
              <h2 className="mt-2">
                <Link href="">About Us</Link>
              </h2>
              <h2>
                <Link href="">Information</Link>
              </h2>
              <h2>
                <Link href="">Privacy Policy</Link>
              </h2>
              <h2>
                <Link href="">Term $ condition</Link>
              </h2>
            </div>
          </div>
          <div className="mt-[4rem] flex justify-end">
            <Image src={brand} alt="loading.." />
          </div>
        </div>
        {/* footer section end */}
      </div>
    </>
  );
};

export default page;
