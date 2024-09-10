"use client";
import React, { Suspense, useRef } from "react";
import RoomModel from "./Room";
import { Canvas } from "@react-three/fiber";
import ModelLoader from "./ModelLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Group } from "three/examples/jsm/libs/tween.module.js";

function BannerComponent() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <div className="h-screen w-full flex flex-col md:flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-start p-4 md:w-4/5 mt-6 md:mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium dark:text-gray-200 text-gray-800 text-center md:text-left">
          Hi... I&apos;m Adarsh Gupta 👨🏻‍💻
        </h1>
        <p className="text-4xl md:text-5xl lg:text-6xl mt-4 font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r text-gray-700 dark:from-cyan-400 dark:via-pink-400 dark:to-yellow-400 animate-shine text-center md:text-left ">
          Building digital Experience with code
        </p>
      </div>

      <div className="h-[70vh] md:h-full w-full md:w-4/5">
        <Canvas className="h-full w-full">
          <Suspense fallback={<ModelLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            {/* <OrbitControls/> */}
            <CameraMove isMobile={isMobile}>

              <RoomModel
                scale={isMobile ? 0.26 : isTablet ? 0.30 : 0.36}
                position={
                  isMobile
                    ? [0, -0.5, 0]
                    : isTablet
                    ? [0.2, -0.2, 0]
                    : [0.4, 0, 0]
                }
                rotation={[3.47, 4.72, 3.16]}
              />
            </CameraMove>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={4} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default BannerComponent;

const CameraMove = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if(isMobile){
            easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta)
        }else{
            easing.dampE(groupRef.current.rotation, [state.pointer.y/3, -state.pointer.x/3, 0], 0.25, delta)
        }
    })
  return <group ref={groupRef}>{children}</group>;
};
