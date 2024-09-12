import Image from "next/image";
import React from "react";

function InfoComponent() {
  const data = [
    {
      title: "Hi, Adarsh Here",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pb-16 h-fit mb-24">
      {data.map((item, index) => (
        <div
          key={index}

          className="rounded-lg group  shadow-md border w-full flex flex-col items-start justify-center dark:bg-gray-800 bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-none"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full group-hover:backdrop-invert-0 h-48 sm:h-56 md:h-64 object-contain  transition-all duration-300 rounded-t-lg rotate-3d invert dark:invert-0"
            />
          )}
          <div className="p-4 flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 mt-2">
              {item.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoComponent;
