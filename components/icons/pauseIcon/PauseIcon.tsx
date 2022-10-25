import React from "react";

interface Props {
  className?: string;
}

const PauseIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="34"
      height="40"
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="4" width="12" height="32" fill="#C89C6C" />
      <rect x="22" y="4" width="12" height="32" fill="#C89C6C" />
    </svg>
  );
};

export default PauseIcon;
