import React, { memo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { angleToRadians } from "../../../utils/angle";
import { useBreakpoints } from "../../../hooks";

export const ThreeFour = memo(({}) => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const { isMobile } = useBreakpoints();

  const texture_four = useLoader(TextureLoader, "/environment/4.jpeg");
  texture_four.encoding = THREE.sRGBEncoding;

  return (
    <>
      <OrbitControls
        ref={orbitControlRef}
        autoRotate
        enableDamping={true}
        rotateSpeed={isMobile ? -0.6 : -0.15} //reverse the rotate direction when dragging mouse
        minDistance={0}
        maxDistance={70}
        minPolarAngle={angleToRadians(50)}
        maxPolarAngle={angleToRadians(120)}
        enableZoom={false}
      />
      <PerspectiveCamera makeDefault position={[0, 5, 70]} fov={35} />

      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry attach="geometry" args={[150, 100, 100]} />
        <meshBasicMaterial
          attach="material"
          map={texture_four}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
});
ThreeFour.displayName = "ThreeFour";
