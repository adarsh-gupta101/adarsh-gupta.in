"use client"
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/SpoyLight";
import { Blogs } from "@/utils/blog";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Link from "next/link";

export function RecentBlogs() {
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight className="-top-40 left-0 md:left-80 md:-top-20" fill="blue" />
      <div className="flex flex-wrap justify-center">

      {Blogs.map((data, index) => {
        return (
          <div key={index}>
            <Link href={data.blogLink}>
            <PinContainer title={data.title} href={data.blogLink} className="">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {data.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {data.shortDescription}{" "}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-yellow-500" >
                    <Image src={data.imageLink} alt={data.title} width={400} height={400} />
                    </div>
              </div>
            </PinContainer>
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
}
