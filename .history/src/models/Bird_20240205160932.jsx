import { useGLTF } from "@react-three/drei";
import React from "react";
import birdScene from "../assets/bird.glb";

const Bird = () => {
  const bird = useGLTF(birdScene);
  return (
    <mesh>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
