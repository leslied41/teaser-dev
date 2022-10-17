import React from "react";

export interface Props {
  className?: string;
  stroke?: string;
  width?: string;
  height?: string;
}

const PdfIcon = ({ className, stroke, width, height }: Props) => {
  return (
    <svg
      className={className}
      width={width ? width : "40"}
      height={height ? height : "56"}
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.172 32V28.364H12.356C13.208 28.364 13.904 28.184 14.444 27.812C14.972 27.452 15.236 26.84 15.236 25.988C15.236 25.136 14.96 24.524 14.42 24.152C13.88 23.78 13.184 23.6 12.356 23.6H9.08V32H10.172ZM12.344 24.512C13.532 24.512 14.12 25.004 14.12 25.988C14.12 26.96 13.532 27.452 12.344 27.452H10.172V24.512H12.344ZM16.6386 23.6V32H19.4226C20.7906 32 21.8466 31.628 22.5786 30.872C23.3106 30.116 23.6706 29.096 23.6706 27.788C23.6706 26.348 23.2746 25.292 22.4826 24.608C21.6906 23.936 20.5866 23.6 19.1586 23.6H16.6386ZM17.7306 31.076V24.512H19.2426C21.4866 24.512 22.5306 25.64 22.5306 27.788C22.5306 30.056 21.3906 31.076 19.2906 31.076H17.7306ZM25.3456 32H26.4376V28.124H30.6136V27.212H26.4376V24.512H30.8176V23.6H25.3456V32Z"
        fill="#C89C6C"
      />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="55"
        stroke={stroke ? stroke : "#C89C6C"}
      />
    </svg>
  );
};

export default PdfIcon;
