import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className=" w-ful h-20 flex items-center justify-between  bg-white/10 backdrop-blur-xl overflow-hidden pr-3">
        <div className="h-full flex justify-center items-center bg-white rounded-r-full">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-48 "
          />
        </div>

        <ul className="text-white flex justify-center items-center w-full h-full gap-12">
          <li className="relative text-xl text-white hover:text-[#F37A0E] hover:cursor-pointer before:content-[''] before:w-0 before:h-0.5 before:rounded before:bg-[#F37A0E] before:absolute before:bottom-0 before:left-0 hover:before:w-full  before:transition-all before:duration-200 transition-all duration-150 ease-in">
            Home
          </li>
          <li className="relative text-xl text-white hover:text-[#F37A0E] hover:cursor-pointer before:content-[''] before:w-0 before:h-0.5 before:rounded before:bg-[#F37A0E] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-200 transition-all duration-150 ease-in">
            About Us
          </li>
          <li className="relative text-xl text-white hover:text-[#F37A0E] hover:cursor-pointer before:content-[''] before:w-0 before:h-0.5 before:rounded before:bg-[#F37A0E] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-200 transition-all duration-150 ease-in">
            Services
          </li>
          <li className="relative text-xl text-white hover:text-[#F37A0E] hover:cursor-pointer before:content-[''] before:w-0 before:h-0.5 before:rounded before:bg-[#F37A0E] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-200 transition-all duration-150 ease-in">
            Industry
          </li>
          <li></li>
        </ul>
        <button className="bg-[#F37A0E] text-white w-40 p-2 rounded hover:bg-white hover:cursor-pointer hover:text-[#F37A0E] transition-all duration-150 ease-in ">
          Call TO Action
        </button>
      </nav>
    </>
  );
}
