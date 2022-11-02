import React, { FC, Fragment, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { angleToRadians } from "../../../utils/angle";
import { useBreakpoints } from "../../../hooks";

interface Props {}

export const ThreeTwo: FC<Props> = ({}) => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const { isMobile } = useBreakpoints();

  const texture_two = useLoader(TextureLoader, "environment/2.jpg");

  return (
    <>
      <OrbitControls
        ref={orbitControlRef}
        autoRotate
        enableDamping={true}
        rotateSpeed={isMobile ? -0.6 : -0.15} //reverse the rotate direction when dragging mouse
        minDistance={0}
        maxDistance={70}
        minPolarAngle={angleToRadians(70)}
        maxPolarAngle={angleToRadians(110)}
        enableZoom={false}
      />
      <PerspectiveCamera makeDefault position={[0, 5, 70]} fov={35} />

      <mesh>
        <sphereGeometry attach="geometry" args={[100, 100, 100]} />

        <meshBasicMaterial
          attach="material"
          map={texture_two}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};
