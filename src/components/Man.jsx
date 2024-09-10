"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ManModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cool.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the first animation (assuming there's at least one)
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0) {
      const firstAction = actions[actionNames[3]];
      firstAction.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.966}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_178">
                <group name="GLTF_created_0">
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Wolf3D_Body.001"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Object_11_168" />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Wolf3D_Outfit_Bottom.001"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name="Object_13_169" />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["Wolf3D_Outfit_Footwear.001"]}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <group name="Object_15_170" />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["Wolf3D_Outfit_Top.001"]}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <group name="Object_17_171" />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials["Wolf3D_Hair.001"]}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <group name="Object_19_172" />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials["Wolf3D_Glasses.001"]}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <group name="Object_21_173" />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["Wolf3D_Eye.001"]}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <group name="Object_23_174" />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials["Wolf3D_Eye.001"]}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <group name="Object_25_175" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Wolf3D_Skin.001"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_7_176" />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Wolf3D_Teeth.001"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="Object_9_177" />
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cool.glb");
