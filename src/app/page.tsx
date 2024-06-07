"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { BoxesCore } from "@/components/ui/background-boxes";
import { NavbarContainer } from "@/components/NavbarContainer";
import { AboutMe } from "@/components/Aboutme";
import { Spotlight } from "@/components/ui/SpoyLight";
import { FloatingNavBar } from "@/components/FloatingNavbarContainer";
import { RecentBlogs } from "@/components/Blogs";
import ConfettiCanvas from "@/app/canvas";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";

export default function Page() {
  const data = [
    {
      name: "Software Developer",
    },
    {
      name: "Technical Content Writer",
    },
  ];
  return (
    <div>
      {/* <NavbarContainer /> */}
      {/* <FloatingNavBar /> */}

      

      <div className="flex flex-col items-center justify-center  h-[100vh]  w-full p-4 z-50">

      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl text-center">
        OK, Here is Yet Another PERSON <br/>GOOD AT <FlipWords words={["GOOOGLING", "Coding", "Techncial_Writing"]}/> 
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      </p>
        

        <div></div>
      </div>
      <AboutMe />
      <RecentBlogs />
    </div>
  );
}
