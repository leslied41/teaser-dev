import { useEffect } from "react";
export const useDisableScroll = (dependence: Boolean) => {
  useEffect(() => {
    if (dependence) {
      document.body.style.setProperty("position", "fixed");
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("overflow");
    }
  }, [dependence]);
};
