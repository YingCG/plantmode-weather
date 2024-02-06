import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Trees from "../models/Trees";
import Weather from "../components/weather/Weather";
import Sky from "../models/Sky";
import Cloud from "../models/Cloud";
import CloudR from "../models/CloudR";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-2, -13, -30];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative flex ">
      <div className="flex items-center justify-center weather-forecast justify-end"><Weather/></div>
      <Canvas
        className={`w-full h-screen bg-transparent relative flex flex-grow${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.6} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Cloud position={[-3, 1, 1]} />
          <CloudR position={[2, 1, 1.5]} />
          <Sky isRotating={isRotating}/>
          <Trees
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
