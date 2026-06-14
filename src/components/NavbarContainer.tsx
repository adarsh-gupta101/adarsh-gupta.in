"use client"
import React, { useState } from "react";
import { Water_Brush } from "next/font/google";
import { ModeToggle } from "./ui/style-toggle";
import { Spotlight } from "./ui/SpoyLight";

const waterBrush = Water_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-water-brush",
});

function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "mailto:adarshguptaworks@gmail.com" },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 my-4 mb-8">
      <h1 className={`text-3xl md:text-4xl font-bold ${waterBrush.className} dark:text-white text-black`}>
        Adarsh Gupta
      </h1>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <ModeToggle />
      </div>

      <div className="md:hidden flex items-center gap-4 mt-3">
        <ModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full mt-4 flex flex-col gap-3 border-t dark:border-gray-700 border-gray-200 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavbarContainer;
