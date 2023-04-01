import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight intensity={0.2} />
      <spotLight
        distance={0}
        position={[-50, 25, 10]}
        angle={0.5}
        penumbra={1}
        intensity={0.75}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={1.75}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        // near: 0.1,
        // far: 200,
        position: [5, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
