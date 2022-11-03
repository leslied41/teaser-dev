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
import {
  GlobalLayout,
  useGlobalContext,
  ProgressLoader,
  SEO,
} from "../components/common";
import { useLocale } from "../hooks";
import s from "../styles/Exhibition.module.css";

const Exhibition = () => {
  const [numberOfExhibitions, setNumberOfExhibitions] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const { setOpenNavbar } = useGlobalContext();
  const isEn = useLocale();
  const [loading, setLoading] = useState(false);

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
    <>
      <SEO title={isEn ? "Exhibition" : "展覽"} />
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
            <Suspense fallback={null}>
              {numberOfExhibitions === 0 ? (
                <ThreeOne setLoading={setLoading} />
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
          <ProgressLoader className="!absolute" loadingProps={loading} />
          <OperateButtonsGroup
            showDetails={showDetails}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        </div>
      </div>
    </>
  );
};

Exhibition.Layout = GlobalLayout;

export default Exhibition;
