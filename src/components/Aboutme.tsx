import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/SpoyLight";

export function AboutMe() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-40 left-0 md:left-80 md:-top-20"
        fill="blue"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-700 to-neutral-500 bg-opacity-50">
          Who am I?
        </h1>
        <p className="mt-4 font-normal text-base dark:text-neutral-300 text-neutral-500 max-w-xl text-center mx-auto">
          Hi there. I&apos;m <b>Adarsh Gupta</b>, a JavaScript developer from India. looking for new and innovative ways to solve problems. I&apos;m a quick learner and have a knack for picking up new technologies quickly. I&apos;m also a great communicator and enjoy working with others to get things done.
        </p>
      </div>
    </div>
  );
}
