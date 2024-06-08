"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { BoxesCore } from "@/components/ui/background-boxes";
import { NavbarContainer } from "@/components/NavbarContainer";
import { AboutMe } from "@/components/Aboutme";
import { Spotlight } from "@/components/ui/SpoyLight";
import { FloatingNavBar } from "@/components/FloatingNavbarContainer";
import { RecentBlogs } from "@/components/Blogs";
import ConfettiCanvas from "@/app/canvas";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useFrame } from '@react-three/fiber'





function Scene() {
  const gltf = useLoader(GLTFLoader, '/untitled.glb')
  return <primitive object={gltf.scene} />
}

export default function Page() {

  
  const data = [
    {
      name: "Software Developer",
    },
    {
      name: "Technical Content Writer",
    },
  ];
  return (
    <div>
      {/* <NavbarContainer /> */}
      {/* <FloatingNavBar /> */}
      <div className="flex flex-col items-center justify-center  h-[30vh]  w-full p-4  top-10">

<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl text-center text-gray-800">
  OK, Here is Yet Another PERSON <br/>GOOD AT <FlipWords words={["GOOOGLING", "Coding", "Techncial_Writing"]}/> 
</h1>

<p className="leading-7 [&:not(:first-child)]:mt-6">
</p>
  

  <div></div>
</div>
      <Canvas style={{height:"80vh", width:"80vw",zIndex:1000,margin:"auto"}}>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={50000} />

        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="studio" background />
        </Suspense>
      </Canvas>
 
      <AboutMe />
      <RecentBlogs />
    </div>
  );
}
