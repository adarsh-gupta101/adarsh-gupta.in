"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ModelLoader from "@/components/ModelLoader";
import { useMediaQuery } from "react-responsive";
import { ManModel } from "./Man";
import { easing } from "maath";
import Image from "next/image";
//
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Link from "next/link";
// import { Leva, useControls } from "leva";
import { motion } from 'framer-motion';

function WorkComponent() {
  //   const controls = useControls("Man", {
  //     PositionX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     PositionY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     PositionZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     RotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     RotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },

  //     RotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     Scale: {
  //       value: 0.5,
  //       min: 0,
  //       max: 1,
  //     },
  //   });

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  return (
    <div className="w-full min-h-[100vh]  my-12 flex md:flex-row flex-col-reverse justify-evenly items-center">
      <div className="rounded h-screen w-full md:w-1/3">
        <Canvas className="h-full w-full">
          <Suspense fallback={<ModelLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 1]} />
            
            <CameraMove isMobile={isMobile}>
              {/* {
  isMobile ? <OrbitControls/> :""
} */}
              <ManModel
                animationNumber={2}
                scale={isMobile ? 2 : isTablet ? 0.3 : 0.46}
                position={
                  isMobile
                    ? [0, -1.5, 0]
                    : isTablet
                    ? [0.2, -0.2, 0]
                    : [0, -0.4, 0]
                }
                // rotation={[0, 4.72, 3.16]}
                // position={[0, -0.4, 0]}
                rotation={[0, 0, 0]}
                // rotation={[
                //   controls.RotationX,
                //   controls.RotationY,
                //   controls.RotationZ,
                // ]} 
                // scale={0.46}
              />
            </CameraMove>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={4} />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Good to meet you here
        </h3>
       


        <div className="flex flex-row gap-2 flex-wrap justify-center">
          <SocialLink
            href="https://x.com/adarsh____gupta"
            imgSrc="/buis_logo/X.png"
            alt="Twitter"
            text="Twitter"
            textColor="dark:text-white text-gray-800 "
            hoverColor="hover:bg-gray-400 hover:text-white "
            additionnalClass="dark:invert-0 invert"
          />
          <SocialLink
            href="https://www.youtube.com/@Paralaxxed"
            imgSrc="/buis_logo/Youtube.png"
            alt="YouTube"
            text="YouTube"
            textColor="dark:text-white text-gray-800"
            hoverColor="hover:bg-red-200"
          />
          <SocialLink
            href="https://www.linkedin.com/in/adarsh1gupta/"
            imgSrc="/buis_logo/Linkedin.png"
            alt="LinkedIn"
            text="LinkedIn"
            textColor="dark:text-white text-gray-800"
            hoverColor="hover:bg-blue-300"
          />
          <SocialLink
            href="https://github.com/adarsh-gupta101"
            imgSrc="/buis_logo/github.png"
            alt="GitHub"
            text="GitHub"
            textColor="dark:text-white text-gray-800"
            hoverColor="hover:bg-gray-400"
            additionnalClass="dark:invert"

          />
          <SocialLink
            href="https://medium.com/adarsh-gupta101"
            imgSrc="/buis_logo/medium.svg"
            alt="Medium"
            text="Medium"
            textColor="dark:text-white text-gray-800"
            hoverColor="hover:bg-gray-400"
            additionnalClass="dark:invert"
          />
        </div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, imgSrc, alt, text, bgColor, textColor, hoverColor,additionnalClass }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center justify-center  ${hoverColor} p-2 rounded-lg cursor-pointer transition-colors duration-300 dark:bg-opacity-80 dark:hover:bg-opacity-100`}
  >
    <Link href={href} className="flex items-center gap-2">
      <Image
        src={imgSrc}
        alt={alt}
        width={100}
        height={100}
        className={`w-6 h-6 object-contain ${additionnalClass}`}
      />
      <p className={`${textColor} text-xl`}>{text}</p>
    </Link>
  </motion.div>
);

export default WorkComponent;

const CameraMove = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (isMobile) {
      easing.damp3(state.camera.position, [0, 0, 5], 0.5, delta);
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y / 3, -state.pointer.x / 2, 0],
        0.2,
        delta
      );
    }
  });
  return <group ref={groupRef}>{children}</group>;
};
