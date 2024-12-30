import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import brand from "@/public/Brands.png";
const Fotter = () => {
  return (
    <>
      <div className="border border-[#BCDDFE] bg-[#BCDDFE] mt-10 h-[80vh]">
        {/* Header Section */}
        <div className="flex justify-around m-10">
          <div>
            <Image src={logo} alt="Logo" />
            <h2 className="mt-2">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s, when <br />
              an unknown printer.
            </h2>
          </div>

          <div>
            <h1 className="text-2xl">Follow Us</h1>
            <h2 className="mt-2">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s, when <br />
              an unknown printer.
            </h2>
          </div>

          <div>
            <h1 className="text-2xl">Contact Us</h1>
            <h2 className="mt-2">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s, when <br />
              an unknown printer.
            </h2>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-around m-2">
          <div>
            <h1 className="text-xl font-semibold">Information</h1>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Information</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold">About Us</h1>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Information</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold">My Account</h1>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Information</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold">Our Offer</h1>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Information</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Logo Section */}
        <div className="mt-[4rem] flex justify-end">
          <Image src={brand} alt="Brand" />
        </div>
      </div>
    </>
  );
};

export default Fotter;
