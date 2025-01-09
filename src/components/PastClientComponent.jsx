"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

function PastClientComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pastWorks = [
    {
      title: "Chat-dot",
      image: "/work1.png",
      link: "https://chat.adarsh-gupta.in/",
      tech: ["Next.js", "Tailwind", "Supabase", "OpenAI", "Vercel"],
      description:
        "A 9-in-one Application where you can chat with different chat and image models. You can also create UI templates directly from the chat.",
    },
    {
      title:"Ship Your Saas",
      description:"A personal boilerplate to ship apps faster.",
      image:"/work4.png",
      link:"https://github.com/adarsh-gupta101/",
      tech:["Next.js", "Stripe",  "Supabase", "Clerk", "Vercel"]
    },
    {
      title:" Gradient Generator",
      description:"A Simple HTML CSS gradient generator, which can be use build 1000's of gradients on fly",
      image:"/work3.png",
      link:"https://gradient-generator-inky.vercel.app/",
      tech:["HTML","CSS","JavaScript"]


    },

    {
      title: "Kerala Vandi",
      image: "/work2.png",
      link: "https://keralavandi.adarsh-gupta.in/",
      tech: ["Next.js", "Tailwind",  "Shadcn"],
      description:
        "An interactive web app to find buses running on specific routes and times in Kerala. Currently under development.",
    },
   
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pastWorks.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pastWorks.length) % pastWorks.length
    );
  };

  return (
    <div className="w-full mt-16 rounded-md bg-gray-50 dark:bg-white/[0.02] relative overflow-hidden min-h-[60vh]">
      <h3 className="text-2xl px-4 py-2 font-bold">Past Works</h3>
      <div className="relative p-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={pastWorks[currentIndex].image}
            alt={pastWorks[currentIndex].title}
            width={600}
            height={600}
            className="w-full md:w-1/2 rounded-md object-contain transition-all duration-300 p-4 brightness-125"
          />
          <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left md:w-1/2">
            <h3 className="text-2xl font-bold">
              {pastWorks[currentIndex].title}
            </h3>
            <p className="text-normal text-gray-500 dark:text-gray-200 mt-2">
              {pastWorks[currentIndex].description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
              {pastWorks[currentIndex].tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link href={pastWorks[currentIndex].link} className="inline-block">
              <Button className="mt-4">
                Visit →
              </Button>
            </Link>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-r"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-l"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PastClientComponent;
