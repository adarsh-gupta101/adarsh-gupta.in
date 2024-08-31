"use client"
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/SpoyLight";
import { Blogs } from "@/utils/blog";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Link from "next/link";

export function RecentBlogs() {
  const [visibleBlogs, setVisibleBlogs] = React.useState(6);

  const handleShowMore = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 6);
  };

  return (
    <div className="w-full rounded-md bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-80 md:-top-20" fill="blue" />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">Recent Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogs.slice(0, visibleBlogs).map((data, index) => (
            <Link key={index} href={data.blogLink}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="relative pb-48 overflow-hidden">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={data.imageLink}
                    alt={data.title}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{data.title}</h3>
                  <p className="text-base text-slate-600">{data.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {visibleBlogs < Blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
