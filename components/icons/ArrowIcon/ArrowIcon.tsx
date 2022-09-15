import React, { FC } from "react";

import { TitleProps } from "../landingTitle/TitleEn";

const ArrowIcon: FC<TitleProps> = ({ width, height, fill, className }) => {
  return (
    <svg
      className={className}
      width={width ? width : "26"}
      height={height ? height : "42"}
      viewBox="0 0 26 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3L3 19L19 35" stroke={fill ? fill : "white"} />
    </svg>
  );
};

export default ArrowIcon;
