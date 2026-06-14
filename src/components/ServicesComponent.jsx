"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";
import { EarthModel } from "./Earth";
import ModelLoader from "./ModelLoader";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Link from "next/link";

function ServicesComponent() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <div className="flex flex-col items-center justify-center dark:bg-grid-white/[0.2] relative bg-grid-slate-900/[0.2] pt-4 md:pt-16 min-h-screen h-fit w-full">
      {/* <div className="h-full w-full    dark:bg-grid-white/[0.2] bg-grid-slate-900/[0.2] relative flex items-center justify-center"> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <h1 className="text-3xl font-semibold text-center mb-3 text-gray-900 dark:text-gray-100 z-10">
        Services
      </h1>
      <p className="text-base text-center text-gray-500 dark:text-gray-400 my-3 max-w-md">
        Full-stack development, technical writing, and freelance consulting — available worldwide.
      </p>
      {/* <div className="w-full h-full flex-grow"></div> */}
      <div className="w-full h-[50vh] flex-grow">
        {/* <Leva/>  */}

        <Canvas
          className="w-full h-full 
        "
        >
          <Suspense fallback={<ModelLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={12} />
            <directionalLight position={[10, 10, 10]} intensity={6} />
            <pointLight position={[1, 1, 1]} />
            <CameraMove isMobile={isMobile}>
              {isMobile ? <OrbitControls /> : ""}
              <EarthModel position={[0, 0, 0]} scale={isMobile ? 0.16 : 0.46} />
            </CameraMove>
          </Suspense>
        </Canvas>
      </div>
      <Link
        href="mailto:adarshguptaworks@gmail.com"
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-md transition-colors duration-200 mt-4"
      >
        Get in Touch →
      </Link></div>
    
  );
}

export default ServicesComponent;

const CameraMove = ({ children, isMobile }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (isMobile) {
      easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y / 0.5, -state.pointer.x / 0.52, 0],
        0.2,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
