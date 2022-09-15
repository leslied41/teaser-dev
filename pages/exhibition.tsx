import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Three,
  OperateButtonsGroup,
  AddressInfo,
} from "../components/Exhibition";
import { FloorPlan } from "../components/icons";
import { GlobalLayout } from "../components/common";
import { useGlobalContext } from "../components/common";

import s from "../styles/Exhibition.module.css";

const Exhibition = () => {
  const [numberOfExhibitions, setNumberOfExhibitions] = useState(0);
  const { setOpenNavbar } = useGlobalContext();

  useEffect(() => {
    if (setOpenNavbar) {
      setOpenNavbar(false);
    }
  }, []);

  const handleIncrease = useCallback(() => {
    if (numberOfExhibitions === 1) setNumberOfExhibitions(0);
    else setNumberOfExhibitions((prev) => prev + 1);
  }, [numberOfExhibitions]);

  const handleDecrease = useCallback(() => {
    if (numberOfExhibitions === 0) setNumberOfExhibitions(1);
    else setNumberOfExhibitions((prev) => prev - 1);
  }, [numberOfExhibitions]);

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
      <OperateButtonsGroup
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <AddressInfo className="absolute left-2 bottom-2" />
    </div>
  );
};

Exhibition.Layout = GlobalLayout;

export default Exhibition;
