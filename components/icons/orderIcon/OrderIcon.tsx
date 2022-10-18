import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const OrderIcon = ({ fill, className }: Props) => {
  return (
    <svg
      className={className}
      width="17"
      height="22"
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="22" fill={fill ? fill : "#C89C6C"} />
      <path
        d="M6.324 8.436V9.492C7.14 9.456 7.92 8.952 8.34 8.28V15H9.396V6.6H8.532C8.4 7.056 8.112 7.464 7.692 7.812C7.26 8.172 6.804 8.376 6.324 8.436Z"
        fill="white"
      />
    </svg>
  );
};

export default OrderIcon;
