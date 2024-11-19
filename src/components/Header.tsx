'use client';
import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../../Data/Data";
import Image from "next/image";
import logo from "../../public/logo-ferrari.png";
import Link from "next/link";

const Header = () => {

  return (
    <div  >
   

      {/* Fixed Header Content */}
      <div className="md:bg-gradient-to-b from-neutral-900/90 to-transparent  fixed top-0  flex flex-row text-white w-full z-10 ">
        <div className="hidden md:flex">
          <Image src={logo} alt="logo" width={110} height={100} />
        </div>
        <div className="flex md:hidden justify-center items-center w-full h-full py-0 px-0">
          <Image src={logo} alt="logo" width={60} height={60} />
        </div>
        <div className="hidden md:flex justify-center items-center text-center tracking-wide gap-9 text-lg py-2">
          {navLinks.map((data, index) => (
            <div key={index}>
              <Link
              href={data.path}
              
              >
                <button  className="uppercase">{data.name}</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden md:flex ml-auto px-8 ">
          <button className="uppercase text-lg tracking-wide">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
