"use client";
import NavbarContainer from "@/components/NavbarContainer";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Youtube() {
  return (
    <div className=" min-h-screen dark:bg-[#0E0E10] pt-32">
      <NavbarContainer />

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 w-fit" containerClassName="w-fit">
        <Image
          src={`/1.png`}
          alt="JavaScript Dead"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          What happens if JavaScript stops working
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Have you ever wondered what happens if your favourite programming
          language stops working? How does JavaScript affect the entire world?
         
        </p>
        <Link href="https://www.youtube.com/watch?v=hU-o4HxV5-4"><button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800">
          <span>Watch Now</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {/* $100 */}
          </span>
        </button>
        </Link>
        
      </BackgroundGradient>
    </div>
  );
}

export default Youtube;
