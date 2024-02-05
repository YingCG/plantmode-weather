import { useGLTF } from "@react-three/drei";
import React from "react";
import cloudScene from "../assets/cloud_test.glb";

const Cloud = () => {
  const cloud = useGLTF(cloudScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={cloud.scene} />
    </mesh>
  );
};

export default Cloud;
