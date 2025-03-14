"use client";
import HouMuchLogo from "@/assets/HouMuchLogo.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { NavItems } from "@/constants";

const Navbar = () => {
  const [mobilenav, setmobilenav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.body.style.overflowY = mobilenav ? "hidden" : "auto";
    }
  }, [mobilenav]);

  return (
    <div
      className={`w-screen text-white max-h-[90px] h-full flex items-center justify-between max-lg:pl-3 lg:px-[3.5rem] fixed top-0 z-[999] transition-all duration-300 ${
        scrolled ? "bg-custom-dark/[.5] backdrop-blur" : "bg-[#141212]"
      }`}
    >
      {/* Logo on the leftmost side */}
      <a 
        href="https://houmuch.in" 
        target="_blank"
        rel="noopener noreferrer"
        title="HouMuch App"
        aria-label="houMuch app website"
        className="mr-10 mt-2"
      >
        <Image 
          src={HouMuchLogo} 
          width={142.5} 
          height={75} 
          alt="TinkerHub MEC Logo"
          priority 
        />
      </a>

      {/* Navbar items in the center */}
      <div
        className={`transition-all duration-300 ease-in-out font-satoshi font-bold lg:static lg:w-max lg:h-max lg:pt-0 lg:bg-transparent lg:block fixed top-0 w-screen h-screen z-[-1] text-center items-center ${
          mobilenav
            ? "right-0 flex flex-col gap-[50px] bg-custom-dark/[.8] backdrop-blur pt-24 text-[#141212]"
            : "right-full flex flex-col gap-8 text-opacity-0 ml-auto text-[#FFFFFFFF]"
        }`}
      >
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-inter text-base group transition-all lg:ml-8 hover:text-gray-400"
            onClick={() => mobilenav && setmobilenav(!mobilenav)}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="ml-auto min-w-max xl:w-auto flex justify-end">
        <button
          className="px-2 py-1 xl:px-4 xl:py-2 bg-black text-xs xl:text-sm text-white font-inter font-[800] transition duration-300 ease-in-out hover:bg-primary-dark border-2 border-white rounded-lg xl:rounded-[13px]"
        >
          Get Started Now
        </button>
      </div>

      <button
        onClick={() => setmobilenav(!mobilenav)}
        className="text-4xl block lg:hidden mr-3"
      >
        {!mobilenav ? (
          <RxHamburgerMenu className="text-[40px] pl-2" />
        ) : (
          <IoCloseOutline className="text-[40px] pl-2" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
