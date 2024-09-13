"use client"
import React, { useState } from "react";
import { Water_Brush } from "next/font/google";
import { ModeToggle } from "./ui/style-toggle";

const waterBrush = Water_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-water-brush",
});

function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 my-4 mb-8 ">
      <h1 className={`text-4xl md:text-6xl font-bold ${waterBrush.className} dark:text-white text-black`}>
        Adarsh Gupta
      </h1>

      <div className="md:hidden mt-4">
        {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "Close" : "Menu"}
        </button> */}
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
       
      </div>

      <ModeToggle />
    </div>
  );
}

export default NavbarContainer;
