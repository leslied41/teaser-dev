import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "../components/Exhibition/three";
import { GlobalLayout } from "../components/common";
import { FloorPlan, ArrowIcon } from "../components/icons";

import s from "../styles/Exhibition.module.css";

interface Props {}

const Exhibition = (props: Props) => {
  const [numberOfExhibitions, setNumberOfExhibitions] = useState(0);
  const handleIncrease = () => {
    if (numberOfExhibitions === 1) setNumberOfExhibitions(0);
    else setNumberOfExhibitions((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (numberOfExhibitions === 0) setNumberOfExhibitions(1);
    else setNumberOfExhibitions((prev) => prev - 1);
  };
  return (
    <div className="h-screen relative">
      <Canvas className={s.canvas}>
        {/* Canvas is responsive to fit the parent node, so you can control how big it is 
        by changing the parents width and height, in this case #canvas-container.*/}
        <Suspense fallback={null}>
          <Three order={numberOfExhibitions} />
        </Suspense>
      </Canvas>
      <FloorPlan
        className="absolute bottom-6 right-6"
        order={numberOfExhibitions}
      />
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={handleDecrease}
      >
        <ArrowIcon />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleIncrease}
      >
        <ArrowIcon className="-rotate-180" />
      </button>
    </div>
  );
};

Exhibition.Layout = GlobalLayout;

export default Exhibition;
