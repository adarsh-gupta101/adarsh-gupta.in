"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ModelLoader from "@/components/ModelLoader";
import { useMediaQuery } from "react-responsive";
import { ManModel } from "./Man";
import { easing } from "maath";
//
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { Leva, useControls } from "leva";

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
    <div className="w-full h-[100vh] my-12 flex md:flex-row flex-col-reverse justify-evenly items-center">
      <div className="bg-gray-800 h-full w-full md:w-1/3">
        <Canvas className="h-full w-full">
          <Suspense fallback={<ModelLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 1]} />
            <OrbitControls />
            <CameraMove isMobile={isMobile}>
              <ManModel
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
        <h3 className="text-white text-3xl m-4 md:text-6xl font-bold">Good to meet you here</h3>
      </div>
    </div>
  );
}

export default WorkComponent;

const CameraMove = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (isMobile) {
      easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
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
