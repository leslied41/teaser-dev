import React, { FC } from "react";

export interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

const LandingMenu: FC<IconProps> = ({ width, height, fill, className }) => {
  return (
    <svg
      className={className}
      width={width ? width : "40"}
      height={height ? height : "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width ? width : "40"}
        height={height ? height : "40"}
        fill={fill ? fill : "white"}
      />
      <rect x="8" y="11" width="25" height="2" fill="#C89C6C" />
      <rect x="8" y="19" width="25" height="2" fill="#C89C6C" />
      <rect x="8" y="27" width="25" height="2" fill="#C89C6C" />
    </svg>
  );
};

export default LandingMenu;
