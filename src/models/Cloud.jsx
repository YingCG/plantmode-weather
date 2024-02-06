import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import cloudScene from "../assets/cloud_test.glb";
import { useFrame } from "@react-three/fiber";

const Cloud = ( {isRotating, ...props}) => {
  const {scene, animations} = useGLTF(cloudScene);
  const cloudRef = useRef()
  const {actions} = useAnimations(animations, cloudRef)
  // useEffect(() => {
  //   actions['Take 001'].play()
  // },[])

  useFrame((_, change) => {
    // cloudRef.current.rotation.x += 0.15 * change
    
    // Update the Y position simulate the cloud moving in a sin wave
    cloudRef.current.rotation.y += 0.15 * change
  })

  return (
    <mesh {...props} position={[-4, 1, 1]} scale={[0.25, 0.25, 0.25]} ref={cloudRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cloud;
