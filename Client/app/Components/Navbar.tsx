import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center mt-10 px-5">
      <div className="logo">
        <Image src={logo} alt="Logo" width={134} height={44} />
      </div>
      <div>
        <div className="flex gap-[4rem] text-mx">
          <Link href="/home" className="hover:text-[#40BFFF]">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#40BFFF]">
            BAGS
          </Link>
          <Link href="/services" className="hover:text-[#40BFFF]">
            SNEAKERS
          </Link>
          <Link href="/belt" className="hover:text-[#40BFFF]">
            BELT
          </Link>
          <Link href="/contact" className="hover:text-[#40BFFF]">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
