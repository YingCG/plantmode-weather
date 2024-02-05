import { useGLTF } from "@react-three/drei";
import React from "react";
import skyScene from "../assets/sky.glb";
const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
