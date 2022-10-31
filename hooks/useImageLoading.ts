import React, { useState, useCallback } from "react";

export const useImageLoading = () => {
  const [loaded, setLoaded] = useState(false);
  const imgLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return { loaded, imgLoad };
};
