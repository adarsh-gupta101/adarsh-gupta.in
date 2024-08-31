import { RecentBlogs } from "@/components/Blogs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8 rounded-3xl max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">You Ideate, We Implement</h1>
          <button className="bg-purple-600 px-4 py-2 rounded-full">
            <a href="https://x.com/Adarsh____gupta">
            Hire Me 👋
            </a>
          </button>
          
          <div className="flex flex-wrap mt-4 gap-4">
            <div className="bg-emerald-500 p-4 rounded-xl">
              <div className="text-2xl font-bold">2+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-yellow-500 p-4 rounded-xl">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Handled Project</div>
            </div>
            <div className="bg-red-400 p-4 rounded-xl">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Clients</div>
            </div>
            <div className="bg-red-400 p-4 rounded-xl">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Technical articles</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mt-4 md:mt-0">
        <div className="bg-purple-600 rounded-xl p-2 max-w-xs mx-auto md:mx-0">
        <Image src="/adarsh.jpg" alt="Profile" width={200} height={200} className="rounded-xl" />
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <div>Name: Adarsh Gupta</div>
            <div>Based in: India</div>
            {/* Add a small graph component here */}
          </div>
          <div className="flex space-x-2">
            <Link href="https://www.linkedin.com/in/adarsh1gupta/" className="bg-blue-600 p-2 rounded-sm">in</Link>
            <Link href="https://medium.com/@adarsh-gupta" className="bg-gray-700 p-2 rounded-sm">
              {/* Add Dribbble icon */}
              M
            </Link>
            <Link href="https://x.com/Adarsh____gupta" className="bg-gray-800 p-2 rounded-sm">
              {/* Add Twitter icon */}
              X
            </Link>
            <Link href="https://www.youtube.com/@Paralaxxed" className="bg-pink-600 p-2 rounded-sm">
              {/* Add Instagram icon */}
              Y
            </Link>
          </div>
        </div>
      </div>
      
  
      
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-gray-400">
            I am a developer with a passion for creating intuitive and visually appealing user interfaces. 
          </p>
        </div>
        <div>
          {/* <h2 className="text-xl font-bold mb-2">Resume</h2> */}
          {/* Add resume content or link */}

        </div>
      </div>

      <RecentBlogs/>
    </div>
  );
}
