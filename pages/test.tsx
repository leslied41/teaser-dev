import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

import useViewportWidth from "../hooks/useViewportWidth";

const Test: NextPage = () => {
  const { viewportWidth } = useViewportWidth();
  console.log("render");

  console.log(viewportWidth);

  return <div className="absolute inset-0 w-full">test</div>;
};

export default Test;
