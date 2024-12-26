"use client";
import React, { useState } from "react";
import { Spotlight } from "@/components/ui/SpoyLight";
import { Blogs } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RecentBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 6; // Number of blogs per page (2 rows x 3 columns)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + blogsPerPage) % Blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - blogsPerPage + Blogs.length) % Blogs.length
    );
  };

  const currentBlogs = Blogs.slice(
    currentIndex,
    currentIndex + blogsPerPage
  ).concat(
    Blogs.slice(0, Math.max(0, currentIndex + blogsPerPage - Blogs.length))
  );

  return (
    <div className="w-full mt-16 rounded-md bg-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-80 md:-top-20" fill="purple" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <h2 className="text-3xl font-bold mb-8 text-left text-gray-800 dark:text-gray-200">
          Recent Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((data, index) => (
            <Link
              key={index}
              href={data.blogLink}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <Spotlight
                className="-top-40 left-0 md:left-80 md:-top-20"
                fill="blue"
              />
             
              <div>
                <div className="relative pb-48 overflow-hidden">
                  <Image
                    className="absolute inset-0 h-full w-3/4 m-auto rounded-xl mt-6"
                    src={data.imageLink}
                    alt={data.title}
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-gray-100 text-center">
                    {data.title}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-gray-100 text-center">
                    {data.shortDescription}
                  </p>
                  <p className="text-sm text-slate-400 mt-2 text-center">
                    {data.publicationDate}
                  </p>
                  <div className="flex justify-center items-center mt-6">
                    <button className="relative inline-flex h-10 w-2/3 sm:w-1/2 lg:w-1/3 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Read now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-110 ease-in duration-100 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-110 ease-in duration-100 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
