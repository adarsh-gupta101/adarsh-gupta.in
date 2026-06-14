import Image from "next/image";
import React from "react";

function InfoComponent() {
  const data = [
    {
      title: "About Me",
      image: "/01.png",
      Description:
        "Software developer from India with 3+ years of experience building full-stack web applications using React, Next.js, and Node.js.",
    },
    {
      title: "Skillset",
      image: "/02.png",
      Description:
        "Proficient in frontend and backend development with a focus on Next.js, TypeScript, and modern web technologies.",
    },
    {
      title: "Open to Opportunities",
      image: "/03.png",
      Description:
        "Currently open to new roles and freelance projects. Looking to collaborate with teams building impactful products.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 md:p-16 my-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 dark:border-gray-800 w-full flex flex-col items-start bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-48 sm:h-52 object-contain rounded-t-lg bg-gray-50 dark:bg-gray-800"
            />
          )}
          <div className="p-5 flex-grow">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoComponent;
