import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import cloudScene from "../assets/cloud_test.glb";
import { useFrame } from "@react-three/fiber";

const CloudR = ( {isRotating, ...props}) => {
  const {scene, animations} = useGLTF(cloudScene);
  const cloudRef = useRef()
  const {actions} = useAnimations(animations, cloudRef)
  // useEffect(() => {
  //   actions['Take 001'].play()
  // },[])

  useFrame((_, delta) => {
    // cloudRef.current.rotation.x += 0.15 * change
    
    
    // Adjust the rotation speed and amplitude for a realistic effect
    const rotationSpeed = 0.003;
    const rotationAmplitude = 0.2;
    // Update the Y rotation to simulate a sinusoidal wave
    cloudRef.current.rotation.y += rotationSpeed * delta;
    cloudRef.current.position.y = Math.sin(cloudRef.current.rotation.y) * rotationAmplitude;
  })

  return (
    <mesh {...props} position={[3, 0.5, 1.5]} scale={[0.5, 0.35, 0.5]} ref={cloudRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default CloudR;
