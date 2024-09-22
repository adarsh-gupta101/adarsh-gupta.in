import { RecentBlogs } from "@/components/Blogs";
import Image from "next/image";
import Link from "next/link";
import NavbarContainer from "../components/NavbarContainer";
import BannerComponent from "@/components/BannerComponent";
import InfoComponent from "@/components/InfoComponent";
import WorkComponent from "@/components/WorkComponent";
import PastClientComponent from "@/components/PastClientComponent";
import ServicesComponent from "@/components/ServicesComponent";
export default function Page() {
  return (
    <div className="h-full dark:bg-black bg-white px-8 py-4">
      <NavbarContainer />
      <BannerComponent />
      <InfoComponent />
      <PastClientComponent />
      <WorkComponent />
      <RecentBlogs />
      <ServicesComponent />
    </div>
  );
}
