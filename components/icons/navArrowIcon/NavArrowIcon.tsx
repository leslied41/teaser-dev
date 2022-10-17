import React from "react";
import { Props } from "../pdfIcon/PdfIcon";

const NavArrowIcon = ({ width, height, className }: Props) => {
  return (
    <svg
      className={className}
      width={width ? width : "33"}
      height={height ? height : "28"}
      viewBox="0 0 33 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 4.83928L30.4668 14L18 23.1607L18 4.83928Z"
        fill="#C89C6C"
        stroke="#C89C6C"
        strokeWidth="3"
      />
      <line
        x1="-1.31134e-07"
        y1="13.5"
        x2="27"
        y2="13.5"
        stroke="#C89C6C"
        strokeWidth="3"
      />
    </svg>
  );
};

export default NavArrowIcon;
