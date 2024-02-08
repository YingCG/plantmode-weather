import React, { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Trees from "../models/Trees";
import Weather from "../components/weather/Weather";
import Sky from "../models/Sky";
import Cloud from "../models/Cloud";
import CloudR from "../models/CloudR";
import Forest from "../models/Forest";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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

  const cameraPosition = { x: 0, y: 0, z: 0 };
  return (
    <section className="w-full h-screen relative flex ">
      <div className="flex items-center weather-forecast justify-end">
        <Weather />
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent relative flex flex-grow${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0.5} />
          <directionalLight position={[5, 2, 2]} intensity={2} color="green" />
          <pointLight position={[3, 3, 3]} intensity={1} color="white" />
          <spotLight position={[1, 1, 1]} intensity={1} color="yellow" />

          <ambientLight intensity={0.6} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#03523a"
            intensity={1}
          />
          <Cloud position={[-3, 1, 1]} />
          <CloudR position={[2, 1, 1.5]} />
          <Sky isRotating={isRotating} />
          <Trees
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Forest
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
