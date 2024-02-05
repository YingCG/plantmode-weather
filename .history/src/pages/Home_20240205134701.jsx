import React from "react";
import { Canvas } from "@react-three/fiber";
const Home = () => {
  return (
    <section className="w-full h-screen relative ">
      {/* <div className="flex items-center justify-center">Pop Up</div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      ></Canvas>
    </section>
  );
};

export default Home;
