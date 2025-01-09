"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/SpoyLight";

const ExperiencesComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const Experiences = [
    {
      id: 6,
      Company: "Tata Consultancy Services",
      Work: "Systems Engineer",
      Date: "October 2024 - Present",
      Description:
        "Currently working as a Java Backend Developer in the TCS BaNCS implementation team. Responsible for designing and implementing backend systems, ensuring scalability, and collaborating with cross-functional teams.",
    },
    {
      id: 5,
      Company: "Lambdatest",
      Work: "Freelance Writer",
      Date: "October 2022 - December 2024",
      Description:
        "Authored in-depth, well-researched articles on web development that garnered over 500K reads. Focused on explaining complex topics in an engaging manner, earning positive feedback from the developer community and establishing a credible online presence.",
    },
    {
      id: 4,
      Company: "Talent500",
      Work: "Technical Writer",
      Date: "October 2022 - December 2024",
      Description:
        "Produced high-quality technical content covering a wide range of software development topics, including methodologies, tools, and best practices. Contributed to enhancing brand visibility and empowering developers through actionable insights.",
    },
    {
      id: 3,
      Company: "XRI Africa",
      Work: "Freelance Developer",
      Date: "October 2023",
      Description:
        "Developed and launched a responsive website for a leading organization in Africa using Next.js, React, and Tailwind CSS. Delivered the project within the agreed timeline, earning commendations for technical expertise and attention to detail.",
    },
    {
      id: 2,
      Company: "TrendsOnline",
      Work: "Contract Developer",
      Date: "September 2023",
      Description:
        "Worked as a Frontend Developer for a Zimbabwe-based IT solutions firm. Built and optimized several client projects from scratch, implementing modern design principles and receiving positive feedback for delivering high-quality solutions.",
    },
    {
      id: 1,
      Company: "Mages.studio",
      Work: "Freelance Developer",
      Date: "August 2022",
      Description:
        "Designed and developed a complete website for a Kerala-based web design studio. Collaborated closely with designers to create an intuitive and visually appealing UI/UX, gaining valuable experience in frontend development and design integration.",
    },
  ];

  const paginatedExperiences = Experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextSlide = () => {
    if ((currentPage + 1) * itemsPerPage < Experiences.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full mt-16 rounded-md bg-white/[0.02] relative overflow-hidden">
      <div className="container mx-auto p-4 md:px-10 md:py-8">
        <h2 className="text-3xl font-bold mb-12 text-left text-gray-800 dark:text-gray-200">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {Experiences.map((experience) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className="ml-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg p-6 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {experience.Work} at {experience.Company}
                    </h3>
                    <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                      {experience.Date}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
                    {experience.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
