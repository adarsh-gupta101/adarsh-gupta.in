"use client";
import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import RoomModel from "./Room";
import { Canvas } from "@react-three/fiber";
import ModelLoader from "./ModelLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import Confetti from "react-confetti";
import Image from "next/image";
import { throttle } from "lodash"; // Make sure to install lodash if not already
import { Spotlight } from "./ui/SpoyLight";

function BannerComponent() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const [showConfetti, setShowConfetti] = useState(false);
  const canvasRef = useRef(null);

  return (
    <div className="min-h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-gradient">
      {/* <Spotlight className="-top-40 left-0 md:left-80 md:top-10" fill="purple" /> */}
      <div className="h-full w-full    dark:bg-grid-white/[0.2] bg-grid-slate-900/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col bg-none lg:flex-row items-center justify-between w-full max-w-7xl mb-8 lg:mb-0 z-10" id="about">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:mr-8 w-full lg:w-3/5">
            <h1 className="text-4xl selection:bg-purple-400 selection:text-black sm:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center lg:text-left mb-4">
              Hi, I&apos;m Adarsh Gupta
            </h1>
            <p className="text-xl sm:text-2xl lg:text-2xl font-medium text-center lg:text-left text-gray-500 dark:text-gray-400 mb-6">
              Software Developer & Technical Writer based in India
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 text-center lg:text-left mb-6 max-w-lg leading-relaxed">
              I build full-stack web applications and write in-depth technical articles. Currently working as a Systems Engineer at Tata Consultancy Services.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                Software Developer
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                Technical Writer
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                500K+ Article Reads
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-3/12">
            <Image
              src="/humane2.png"
              alt="humane"
              width={400}
              height={400}
              className=" object-contain w-full max-w-md drop-shadow-2xl  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;

const CameraMove = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (isMobile) {
      easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y / 3, -state.pointer.x / 3, 0],
        0.25,
        delta
      );
    }
  });
  return <group ref={groupRef}>{children}</group>;
};
