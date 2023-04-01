import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

const Satellite = ({ isMobile }) => {
  const satellite = useGLTF("./satellite/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-50, 25, 10]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={satellite.scene}
        scale={isMobile ? 2.5 : 5}
        position={isMobile ? [0, -1.75, 0] : [0, -1.75, 0]}
      />
    </mesh>
  );
};

const SatelliteCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        fov: 20,
        near: 0.1,
        far: 100,
        position: [20, 30, 15],
      }}
      //   camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Satellite isMobile={isMobile} />
      </Suspense>
      <Preload oll />
    </Canvas>
  );
};

export default SatelliteCanvas;
