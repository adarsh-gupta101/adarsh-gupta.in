import { RecentBlogs } from "@/components/Blogs";
import Image from "next/image";
import Link from "next/link";
import NavbarContainer from "../components/NavbarContainer";
import BannerComponent from "@/components/BannerComponent";
import InfoComponent from "@/components/InfoComponent";
import WorkComponent from "@/components/WorkComponent";

export default function Page() {
  return (
    <div className="h-full dark:bg-gray-900 bg-slate-200 px-8 py-4">
      <NavbarContainer />
      <BannerComponent />
      <InfoComponent />
      <WorkComponent />
      <RecentBlogs />
    </div>
  );
}
