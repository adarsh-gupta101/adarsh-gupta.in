
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function EarthModel(props) {
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Surfacemat_0.geometry}
        material={materials['Surface.mat']}
        scale={0.2}
      />
    </group>
  )
}

useGLTF.preload('/earth.glb')