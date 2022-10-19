import React from "react";

interface Props {
  className?: string;
}

const CloseIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12.4141"
        y="11"
        width="24"
        height="2"
        transform="rotate(45 12.4141 11)"
        fill="#C89C6C"
      />
      <rect
        x="11"
        y="28"
        width="24"
        height="2"
        transform="rotate(-45 11 28)"
        fill="#C89C6C"
      />
    </svg>
  );
};

export default CloseIcon;
