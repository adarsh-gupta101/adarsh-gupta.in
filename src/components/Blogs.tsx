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
      {/* <Spotlight className="-top-40 left-0 md:left-80 md:-top-20" fill="purple" /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <h2 className="text-2xl font-semibold mb-8 text-left text-gray-800 dark:text-gray-200" id="blog">
          Writing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((data, index) => (
            <Link
              key={index}
              href={data.blogLink}
              className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden transition duration-200 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-sm"
            >
              <div>
                <div className="relative pb-48 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <Image
                    className="absolute inset-0 h-full w-3/4 m-auto rounded-lg mt-6 object-contain"
                    src={data.imageLink}
                    alt={data.title}
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                    {data.publicationDate}
                  </p>
                  <h3 className="text-base font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {data.shortDescription}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Read article →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
