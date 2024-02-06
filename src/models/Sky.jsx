import { useGLTF } from "@react-three/drei";
import React, {useRef} from "react";
import skyScene from "../assets/unreal_engine_4_sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef()

  useFrame((_, change) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.15 * change
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
