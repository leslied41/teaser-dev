import React, { useEffect, useState, useRef, useCallback } from "react";
import { TitleAndSubtitle, ProgressBar, VideoBg } from "../components/Landing";
import { GlobalLayout, SEO } from "../components/common";
import { useLocale } from "../hooks";
import { data } from "../public/Artists/data";
import cn from "clsx";
var debounce = require("lodash.debounce");

const Home = () => {
  const [update, setUpdate] = useState(false);
  const indexRef = useRef<number>(0);
  const touchStartPositionRef = useRef<number>();
  const currentPositionRef = useRef<number>();
  const isEn = useLocale();

  const wheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (indexRef.current < data.length - 1) {
        indexRef!.current = indexRef.current! + 1;
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
  const updateIndexRef = useCallback((index: number) => {
    indexRef.current = index;
  }, []);

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
    <>
      <SEO title={isEn ? "Home" : "??????"} />
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ProgressBar
          className="fixed top-0 w-full z-10"
          index={indexRef.current}
        />
        {data.map((item, i) => {
          if (i === indexRef.current)
            return (
              <TitleAndSubtitle
                key={i}
                className={cn("fixed bottom-0 left-0 z-10")}
                obj={data[indexRef.current]}
                order={i}
              />
            );
        })}
        <VideoBg
          index={indexRef.current}
          updateIndexRef={updateIndexRef}
          setUpdate={setUpdate}
          update={update}
        />
      </div>
    </>
  );
};
Home.Layout = GlobalLayout;
export default Home;
