"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarContainer } from "@/components/NavbarContainer";
import { AboutMe } from "@/components/Aboutme";
import { Spotlight } from "@/components/ui/SpoyLight";
import { FloatingNavBar } from "@/components/FloatingNavbarContainer";
import { RecentBlogs } from "@/components/Blogs";

export default function Page() {
  return (
    <div>
      {/* <NavbarContainer /> */}
      <FloatingNavBar/>
         <div className="flex items-center justify-center  h-[100vh]  w-full p-4 z-50">
        <TextRevealCard
          className=""
          text="You know how your business works"
          revealText="I know how to build the interface for it "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to show your business.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            I can help you with that. You just focus on getting your audience, I
            will do the rest.
          </TextRevealCardDescription>
        </TextRevealCard>
        {/* <BackgroundB/>eams/> */}

        <div></div>
      </div>
      <AboutMe />
      <RecentBlogs/>
    </div>
  );
}
