import React, { FC, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { angleToRadians } from "../../../utils/angle";

interface Props {
  order: number;
}
const Three: FC<Props> = ({ order }) => {
  const textures_one = () =>
    useLoader(TextureLoader, [
      "/models/test/front.jpeg",
      "/models/test/back.jpeg",
      "/models/test/top.jpeg",
      "/models/test/bottom.jpeg",
      "/models/test/left.jpeg",
      "/models/test/right.jpeg",
    ]);

  const textures_two = () =>
    useLoader(TextureLoader, [
      "/models/test_2/front.jpeg",
      "/models/test_2/back.jpeg",
      "/models/test_2/top.jpeg",
      "/models/test_2/bottom.jpeg",
      "/models/test_2/left.jpeg",
      "/models/test_2/right.jpeg",
    ]);

  const textures = useMemo(() => {
    let texture;
    if (order === 0) texture = textures_one;
    if (order === 1) texture = textures_two;
    return texture;
  }, [order, textures_one, textures_two]);

  return (
    <>
      <OrbitControls
        autoRotate
        minDistance={0}
        maxDistance={70}
        minPolarAngle={angleToRadians(70)}
        maxPolarAngle={angleToRadians(110)}
      />
      <PerspectiveCamera makeDefault position={[0, 5, 70]} fov={35} />

      <mesh>
        <boxGeometry attach="geometry" args={[100, 100, 100]} />
        {textures!.map((t, i) => (
          <meshBasicMaterial
            key={i}
            map={t}
            side={THREE.BackSide}
            attach={`material-${i}`}
          />
        ))}
      </mesh>
    </>
  );
};

export default Three;
