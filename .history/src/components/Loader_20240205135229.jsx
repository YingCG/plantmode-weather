import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 animate-spin" />
    </div>
  );
};

export default Loader;
