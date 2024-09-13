"use client";
import React, { Suspense, useRef, useState } from "react";
import RoomModel from "./Room";
import { Canvas } from "@react-three/fiber";
import ModelLoader from "./ModelLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import Confetti from "react-confetti";

function BannerComponent() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center py-4 md:py-8 px-4 md:px-8 relative overflow-hidden">
      {showConfetti && <Confetti style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
      height={1000}
      // wind={0.05}
      gravity={0.8}
      // it should be shown for 3 seconds

      
      numberOfPieces={400}
      colors={['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', "red", "blue", "green", "yellow", "purple"]} />}
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<ModelLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <CameraMove isMobile={isMobile}>
            {isMobile ? <OrbitControls /> : ""}
            <RoomModel
              scale={isMobile ? 0.216 : isTablet ? 0.30 : 0.43}
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
          <directionalLight position={[10, 10, 0]} intensity={4} />
        </Suspense>
      </Canvas>
    
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 mb-8 md:mb-12 z-10">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-gray-200 text-gray-800 text-center md:text-left mb-4">
            Hi, I&apos;m Adarsh Gupta 👨🏻‍💻
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text animate-gradient mb-4">
            Building Digital Experiences with Code
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <span className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
              Software Developer
            </span>
            <span className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
              Technical Writer
            </span>
            {/* Add more labels as needed */}
          </div>
        </div>
      </div>

      <button
        onClick={handleConfetti}
        className="bg-gradient-to-r   from-cyan-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text animate-gradient text-xl md:text-2xl font-bold px-4 py-2 rounded-full"
      >
       I'm feeling lucky!!! <span className="text-sm">(click me)</span>
      </button>
     
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
