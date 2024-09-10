"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/SpoyLight";
import { Blogs } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RecentBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const blogsPerPage = 3;

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + blogsPerPage) % Blogs.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - blogsPerPage + Blogs.length) % Blogs.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full mt-16 rounded-md bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-80 md:-top-20" fill="blue" />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-left text-slate-100">
          Recent Blogs
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / blogsPerPage)}%)`,
            }}
          >
            {Blogs.map((data, index) => (
              <Link
                key={index}
                href={data.blogLink}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="relative pb-48 overflow-hidden">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={data.imageLink}
                      alt={data.title}
                      width={800}
                      height={400}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-gray-100">
                      {data.title}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-gray-100">
                      {data.shortDescription}
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      {data.publicationDate}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />{" "}
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            disabled={isAnimating}
          >
            <ChevronRight size={24} /> {""}
          </button>
        </div>
      </div>
    </div>
  );
}
