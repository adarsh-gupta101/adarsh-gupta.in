import Image from "next/image";
import React from "react";
import { Spotlight } from "./ui/SpoyLight";

function InfoComponent() {
  const data = [
    {
      title: "Hi, Again....",
      image: "/01.png",
      Description:
        "With 3 years of experience, I'm a software developer, from India, skilled in both frontend and backend",
    },
    {
      title: "Skillset",
      image: "/02.png",
      Description:
        "Comfortable with both frontend and backend development, with a focus on Next.js",
    },
    {
      title: "Available for work",
      image: "/03.png",
      Description:
        "I'm currently available for work, and I'm looking for a new opportunity to work with a great team and make a difference.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-16  my-24">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-lg group  shadow-md border w-full flex flex-col items-start justify-center dark:bg-gray-800 bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-xl border-gray-300 hover:border-none"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-48 sm:h-56 md:h-64 object-contain  transition-all duration-300 rounded-t-lg rotate-3d bg-gray-800 dark:invert-0"
            />
          )}
          <div className="p-4 flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-balance text-center">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 mt-2  text-balance text-center">
              {item.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoComponent;
