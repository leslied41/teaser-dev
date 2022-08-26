import React, { useEffect, useState, useRef, useMemo } from "react";
import type { NextPage } from "next";
import ExhibitionInfo from "../components/ExhibitionInfo";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import LocaleSwitch from "../components/LocaleSwitch";
var debounce = require("lodash.debounce");
var throttle = require("lodash.throttle");
import { data } from "../components/TitleAndSubtitle/data";
import VideoBg from "../components/videoBg";

const Home: NextPage = () => {
  const [update, setUpdate] = useState(false);
  const indexRef = useRef<number>(0);
  const touchStartPositionRef = useRef<number>();
  const currentPositionRef = useRef<number>();

  const wheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (indexRef.current < data.length - 1) {
        indexRef.current = indexRef.current + 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === data.length - 1) {
        indexRef.current = 0;
        return setUpdate((prev) => !prev);
      }
    }
    if (e.deltaY < 0) {
      if (indexRef.current > 0) {
        indexRef.current = indexRef.current - 1;
        return setUpdate((prev) => !prev);
      }

      if (indexRef.current === 0) {
        indexRef.current = data.length - 1;
        return setUpdate((prev) => !prev);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartPositionRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    currentPositionRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartPositionRef.current) return;
    if (!currentPositionRef.current) return;
    if (currentPositionRef.current - touchStartPositionRef.current < -50) {
      if (indexRef.current < data.length - 1) {
        indexRef.current = indexRef.current + 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === data.length - 1) {
        indexRef.current = 0;
        return setUpdate((prev) => !prev);
      }
    }
    if (currentPositionRef.current - touchStartPositionRef.current > 50) {
      if (indexRef.current > 0) {
        indexRef.current = indexRef.current - 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === 0) {
        indexRef.current = data.length - 1;
        return setUpdate((prev) => !prev);
      }
    }
  };

  const updateIndexRef = useMemo(
    () => (index: number) => {
      indexRef.current = index;
    },
    []
  );

  useEffect(() => {
    const debounceFn = debounce(wheel, 35);
    const debounceTouchMove = debounce(handleTouchMove, 50);
    window.addEventListener("wheel", debounceFn);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", debounceTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", debounceFn);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", debounceTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full">
      <ExhibitionInfo className="fixed top-2 left-2 sm:top-3 sm:left-3" />
      <TitleAndSubtitle
        className="fixed bottom-0 left-0"
        obj={data[indexRef.current]}
        index={indexRef.current}
      />
      {/* so my current method to change title and subtitle might not be good, casue it may
      make it impossible to implement animation. another solution is to use map function, to generaete all
      the titleandsubtitle componets here, and add like opacity to each element to realize same result.
      and regarding long name and short name break difference might be easier to implement as well.
      in each componet, width can be calculated and to decide col or row layout. and default layout 
      will be set as row, through calculation in uselayouteffect, layout can be changed inside. it is 
      an easier solution aoviding complciated and unnecessary logics.  */}
      <LocaleSwitch />
      <VideoBg
        index={indexRef.current}
        updateIndexRef={updateIndexRef}
        setUpdate={setUpdate}
        update={update}
      />
    </div>
  );
};

export default Home;
