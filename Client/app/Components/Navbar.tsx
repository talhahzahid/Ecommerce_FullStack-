"use client"

import React, { useState } from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center mt-8 px-5 py-4">
      {/* Logo */}
      <div className="logo">
        <Image src={logo} alt="Logo" width={134} height={44} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[4rem] text-mx">
        <Link href="/" className="hover:text-[#40BFFF]">HOME</Link>
        <Link href="/dashboard" className="hover:text-[#40BFFF]">DASHBOARD</Link>
        <Link href="/services" className="hover:text-[#40BFFF]">SNEAKERS</Link>
        <Link href="/belt" className="hover:text-[#40BFFF]">BELT</Link>
        <Link href="/contact" className="hover:text-[#40BFFF]">CONTACT Us</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl text-[#40BFFF] focus:outline-none"
        >
          <div
            className={`h-1 w-6 bg-[#40BFFF] mb-2 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`h-1 w-6 bg-[#40BFFF] mb-2 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`h-1 w-6 bg-[#40BFFF] mb-2 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white bg-opacity-90 backdrop-blur-sm transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link href="/" className="text-xl hover:text-[#40BFFF]" onClick={toggleMobileMenu}>HOME</Link>
          <Link href="/dashboard" className="text-xl hover:text-[#40BFFF]" onClick={toggleMobileMenu}>DASHBOARD</Link>
          <Link href="/services" className="text-xl hover:text-[#40BFFF]" onClick={toggleMobileMenu}>SNEAKERS</Link>
          <Link href="/belt" className="text-xl hover:text-[#40BFFF]" onClick={toggleMobileMenu}>BELT</Link>
          <Link href="/contact" className="text-xl hover:text-[#40BFFF]" onClick={toggleMobileMenu}>CONTACT Us</Link>
        </div>
      </div>

      {/* Login Button */}
      <div className="hidden md:flex">
        <button className="btn btn-error text-white">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
