import React, { useLayoutEffect, useState, useEffect } from "react";
var debounce = require("lodash.debounce");

const useBreakpoints = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const [mobile, setMobile] = useState<boolean>(false);
  useIsomorphicLayoutEffect(() => {
    const w = window.innerWidth;
    if (w <= 640) setMobile(true);
    if (w > 640) setMobile(false);

    const getWidth = () => {
      const w = window.innerWidth;
      if (w <= 640) setMobile(true);
      if (w > 640) setMobile(false);
    };
    const debounceFn = debounce(getWidth, 100);
    window.addEventListener("resize", debounceFn);
    return () => {
      window.removeEventListener("resize", debounceFn);
    };
  }, []);
  return { mobile };
};
export default useBreakpoints;
