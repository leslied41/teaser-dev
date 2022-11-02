import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  ThreeOne,
  ThreeTwo,
  ThreeThree,
  ThreeFour,
  ThreeFive,
  OperateButtonsGroup,
  Details,
} from "../components/Exhibition";
import { GlobalLayout, useGlobalContext } from "../components/common";
import { useLocale } from "../hooks";
import cn from "clsx";
import s from "../styles/Exhibition.module.css";

const Exhibition = () => {
  const [numberOfExhibitions, setNumberOfExhibitions] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const { setOpenNavbar } = useGlobalContext();
  const isEn = useLocale();

  useEffect(() => {
    if (setOpenNavbar) setOpenNavbar(false);
  }, []);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };
  const handleIncrease = useCallback(() => {
    if (numberOfExhibitions === 4) setNumberOfExhibitions(0);
    else setNumberOfExhibitions((prev) => prev + 1);
  }, [numberOfExhibitions]);

  const handleDecrease = useCallback(() => {
    if (numberOfExhibitions === 0) setNumberOfExhibitions(4);
    else setNumberOfExhibitions((prev) => prev - 1);
  }, [numberOfExhibitions]);

  return (
    <div>
      <div className="flex  justify-center pt-[337px] pb-[100px]">
        <div className="max-w-[600px]">
          <h1 className="text-lg uppercase text-main-color">
            {isEn ? "exhibition" : "展覽"}
          </h1>
          <Details className="mt-20" />
        </div>
      </div>
      <div className="h-[calc(var(--vh)*90)] md:h-[calc(var(--vh)*100)] relative">
        <Canvas className={s.canvas}>
          {/* Canvas is responsive to fit the parent node, so you can control how big it is 
        by changing the parents width and height, in this case #canvas-container.*/}
          <Suspense fallback={null}>
            {numberOfExhibitions === 0 ? (
              <ThreeOne />
            ) : numberOfExhibitions === 1 ? (
              <ThreeTwo />
            ) : numberOfExhibitions === 2 ? (
              <ThreeThree />
            ) : numberOfExhibitions === 3 ? (
              <ThreeFour />
            ) : numberOfExhibitions === 4 ? (
              <ThreeFive />
            ) : (
              <></>
            )}
          </Suspense>
        </Canvas>

        {/* <FloorPlan
        className="absolute bottom-6 right-6"
        order={numberOfExhibitions}
      /> */}
        <OperateButtonsGroup
          showDetails={showDetails}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
        {/* <AddressInfo className="absolute left-2 bottom-2" /> */}
        {/* <Overlay
          className={cn("absolute ", {
            ["hidden"]: showDetails,
          })}
        /> */}
        {/* <Button
        variant="primary"
        className="absolute top-0 left-0"
        onClick={toggleDetails}
        showDetails={showDetails}
      >
        {isEn
          ? showDetails
            ? "hide details"
            : "show details"
          : showDetails
          ? "隱藏資料"
          : "顯示資料"}
      </Button> */}
        {/* <Details
        className={cn("absolute top-6 left-1/2 -translate-x-1/2", {
          ["hidden"]: !showDetails,
        })}
      /> */}
      </div>
    </div>
  );
};

Exhibition.Layout = GlobalLayout;

export default Exhibition;
