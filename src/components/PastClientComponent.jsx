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
      <div className="flex items-center justify-between px-4 py-2 mb-2">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200" id="projects">Projects</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
          >
            →
          </button>
        </div>
      </div>
      <div className="relative p-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={pastWorks[currentIndex].image}
            alt={pastWorks[currentIndex].title}
            width={600}
            height={600}
            className="w-full md:w-1/2 rounded-lg object-contain transition-all duration-300 p-2 border border-gray-200 dark:border-gray-800"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left md:w-1/2">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
              {currentIndex + 1} / {pastWorks.length}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-3">
              {pastWorks[currentIndex].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {pastWorks[currentIndex].description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
              {pastWorks[currentIndex].tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link href={pastWorks[currentIndex].link} className="inline-block mt-5">
              <Button className="text-sm h-9 px-4">
                View Project →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastClientComponent;
