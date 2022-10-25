import React from "react";
interface Props {
  className: string;
}

const PlayButtonIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="30"
      height="36"
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3.27757L27 18L1.5 32.7224L1.5 3.27757Z"
        fill="#C89C6C"
        stroke="#C89C6C"
        strokeWidth="3"
      />
    </svg>
  );
};

export default PlayButtonIcon;
