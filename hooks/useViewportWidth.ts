import React, { useLayoutEffect, useState, useEffect } from "react";
var debounce = require("lodash.debounce");

const useViewportWidth = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const [viewportWidth, setViewportWidth] = useState<number>();

  useIsomorphicLayoutEffect(() => {
    const w = window.innerWidth;
    setViewportWidth(w);
    const getWidth = () => {
      const w = window.innerWidth;
      setViewportWidth(w);
    };
    const debounceFn = debounce(getWidth, 100);
    window.addEventListener("resize", debounceFn);
    return () => {
      window.removeEventListener("resize", debounceFn);
    };
  }, []);
  return { viewportWidth };
};
export default useViewportWidth;
