import React, { FC, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { angleToRadians } from "../../../utils/angle";
import { useBreakpoints } from "../../../hooks";

interface Props {
  order: number;
}

const Three: FC<Props> = ({ order }) => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const { isMobile } = useBreakpoints();

  const [texture_one, texture_two, texture_three, texture_four, texture_five] =
    useLoader(TextureLoader, [
      "https://imagedelivery.net/InxrMycX3ahlhQ5v8IGWZQ/58cce5cd-2930-4d83-9279-3917bdfe2400/Teaser",
      "https://imagedelivery.net/InxrMycX3ahlhQ5v8IGWZQ/db9a0171-6b5a-4117-9571-cee7ded1bf00/Teaser",
      "https://imagedelivery.net/InxrMycX3ahlhQ5v8IGWZQ/67bbd72f-c220-48e5-78f9-17fe61db7100/Teaser",
      "https://imagedelivery.net/InxrMycX3ahlhQ5v8IGWZQ/5cca0eed-9331-45bb-8b81-517b5b2b2000/Teaser",
      "https://imagedelivery.net/InxrMycX3ahlhQ5v8IGWZQ/f927f0d1-9f1e-4b05-4fef-d5569a45cd00/Teaser",
    ]);

  const texture = useMemo(() => {
    let texture;
    if (order === 0) texture = texture_one;
    if (order === 1) texture = texture_two;
    if (order === 2) texture = texture_three;
    if (order === 3) texture = texture_four;
    if (order === 4) texture = texture_five;
    return texture;
  }, [order]);

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
        <sphereGeometry attach="geometry" args={[150, 100, 100]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};

export default Three;
