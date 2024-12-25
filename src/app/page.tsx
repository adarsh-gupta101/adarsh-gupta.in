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
    <div className="h-full dark:bg-slate-900 bg-white px-8 py-4">
      <NavbarContainer />
      <BannerComponent />
      <div className="flex w-full justify-center items-center">
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
    // Button code
    <Link href={"mailto:adarshguptaworks@gmail.com"} className="hover:pb-6">
      <button className=" inline-flex h-12 text-xl animate-shimmer items-center justify-center rounded-md border border-s-black dark:border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Hire Me 🚀
      </button>
    </Link>

    // tailwind.config.js code
  );
}
