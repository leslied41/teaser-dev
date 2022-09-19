import React, { useLayoutEffect, useState, useEffect } from "react";
var debounce = require("lodash.debounce");

const useBreakpoints = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const measure = () => {
    if (window.matchMedia("(max-width: 640px)").matches) setIsMobile(true);
    else setIsMobile(false);
  };

  useIsomorphicLayoutEffect(() => {
    measure();
    const debounceFn = debounce(measure, 100);
    window.addEventListener("resize", debounceFn);
    return () => {
      window.removeEventListener("resize", debounceFn);
    };
  }, []);
  return { isMobile };
};
export default useBreakpoints;
