import { RecentBlogs } from "@/components/Blogs";
import Image from "next/image";
import Link from "next/link";
import NavbarContainer from "../components/NavbarContainer";
import BannerComponent from "@/components/BannerComponent";
import InfoComponent from "@/components/InfoComponent";
import WorkComponent from "@/components/WorkComponent";
import PastClientComponent from "@/components/PastClientComponent";
import ServicesComponent from "@/components/ServicesComponent";
import WorkExperience from "@/components/WorkExperience"
export default function Page() {
  return (
    <div className="h-full dark:bg-gray-950 bg-white px-8 py-4 max-w-screen-xl mx-auto">
      <NavbarContainer />
      <BannerComponent />
      <div className="flex w-full justify-center items-center my-8">
        <HireMeButton />
      </div>

      <RecentBlogs />
      <WorkExperience/>
      <InfoComponent />
      <PastClientComponent />
      <WorkComponent />
      <ServicesComponent />
    </div>
  );
}

function HireMeButton() {
  return (
    <Link href={"mailto:adarshguptaworks@gmail.com"}>
      <button className="inline-flex h-11 text-base items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-black dark:bg-white px-8 font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
        Get in Touch
      </button>
    </Link>
  );
}
