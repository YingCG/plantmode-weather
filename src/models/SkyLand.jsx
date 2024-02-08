import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const skylandScene = (
  <div class="sketchfab-embed-wrapper">
    {" "}
    <iframe
      title="Sky Land"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking
      execution-while-out-of-viewport
      execution-while-not-rendered
      web-share
      src="https://sketchfab.com/models/8337a953ac7948fbb7e6afe2ade3408f/embed"
    >
      {" "}
    </iframe>{" "}
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
      {" "}
      <a
        href="https://sketchfab.com/3d-models/sky-land-8337a953ac7948fbb7e6afe2ade3408f?utm_medium=embed&utm_campaign=share-popup&utm_content=8337a953ac7948fbb7e6afe2ade3408f"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;"
      >
        {" "}
        Sky Land{" "}
      </a>{" "}
      by{" "}
      <a
        href="https://sketchfab.com/Folgore?utm_medium=embed&utm_campaign=share-popup&utm_content=8337a953ac7948fbb7e6afe2ade3408f"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;"
      >
        {" "}
        Folgore{" "}
      </a>{" "}
      on{" "}
      <a
        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8337a953ac7948fbb7e6afe2ade3408f"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;"
      >
        Sketchfab
      </a>
    </p>
  </div>
);

const SkyLand = () => {
  const skyland = useGLTF(skylandScene);
  const skyLandRef = useRef();
  return (
    <mesh ref={skyLandRef}>
      <primitive object={skyland.scene} />
    </mesh>
  );
};

export default SkyLand;
