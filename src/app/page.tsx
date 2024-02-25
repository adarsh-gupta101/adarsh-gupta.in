"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarContainer } from "@/components/NavbarContainer";

export default function Page() {
  return (
    <div>
      <NavbarContainer />
      <div className="flex items-center justify-center bg-[#0E0E10] h-[100vh]  w-full p-4 z-50">
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
      </div>
    </div>
  );
}
