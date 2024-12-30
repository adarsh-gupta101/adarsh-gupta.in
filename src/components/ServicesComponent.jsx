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

      <h1 className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent z-10 bg-gradient-to-r from-blue-400 to-pink-500">
        Services Only Available for People in Earth now!{" "}
      </h1>
      <p className="text-xl text-center dark:text-gray-100 my-4">
        I am currently working on expanding it to Mars{" "}
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
      <h2 className="text-2xl font-normal text-gray-800 dark:text-gray-100 text-center underline underline-offset-4 ">
        <Link href="https://x.com/adarsh____gupta">
          Hire me if you are from here 👋🏻
        </Link>
      </h2></div>
    
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
