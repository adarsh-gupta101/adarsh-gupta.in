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
        "Compfortable with both frontend and backend development, with a focus on Next.js",
    },
    {
      title: "Available for work",
      image: "/03.png",
      Description:
        "I'm currently available for work, and I'm looking for a new opportunity to work with a great team and make a difference.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-fit  justify-center items-center">
      {data.map((data, index) => (
        <div
          key={index}
          className="rounded-lg shadow-md border w-full md:w-96  flex flex-col items-start justify-center dark:bg-gray-800 bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-none"
        >
          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              width={400}
              height={400}
              className="w-full h-72 object-contain  rounded-lg rotate-3d invert dark:invert-0"
            />
          )}
          <div className="p-4">
            <h3 className="text-2xl  font-bold">{data.title}</h3>
            <p className="text text-gray-800 dark:text-gray-200 mt-4">
              {data.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoComponent;
