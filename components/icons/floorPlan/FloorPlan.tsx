import React, { FC } from "react";

interface Props {
  className?: string;
  order: number;
}

const FloorPlan: FC<Props> = ({ className, order }) => {
  return (
    <svg
      className={className}
      width="159"
      height="349"
      viewBox="0 0 159 349"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_313_699)" filter="url(#filter0_d_313_699)">
        <path
          d="M138.763 239.883L56.7895 291.303L38.9952 281.221L79.7416 255.662L80.0431 255.472L83 253.616L83.3038 253.424L86.256 251.571L86.5646 251.376L89.5144 249.526L89.8254 249.328L92.7727 247.48L93.0885 247.283L96.0311 245.438L96.3493 245.238L99.2895 243.395L99.5885 243.205L102.548 241.349L102.852 241.16L105.806 239.307L106.112 239.115L135.112 220.922L135.292 220.81L135.282 73.4347L44.3158 17.7867L43.9641 18.4642L68.1818 33.2775L70.067 237.03L70.0742 237.697L79.3804 254.987L38.0718 280.899L37.5072 281.255L56.8086 292.19L138.407 241.004L152.273 278.433L150.069 310.591L99.8349 342.102L2.7177 283.248L2.86124 12.855L18.512 2.89809L23.4928 5.93759L23.8445 5.26013L18.5048 2L2.14354 12.4111L2 283.477V283.705L99.6603 342.891L99.8373 343L150.754 311.061L152.99 278.402L152.998 278.311L138.761 239.883H138.763ZM83.2584 252.557L73.9522 235.268L76.5909 233.614L85.8971 250.904L83.2584 252.557ZM86.5167 250.512L77.2105 233.222L79.8493 231.569L89.1555 248.859L86.5167 250.512ZM89.7751 248.467L80.4689 231.177L83.1077 229.524L92.4139 246.813L89.7751 248.467ZM93.0335 246.421L83.7273 229.132L86.366 227.478L95.6722 244.768L93.0335 246.421ZM96.2919 244.376L86.9856 227.086L89.622 225.433L98.9282 242.723L96.2919 244.376ZM99.5502 242.331L90.244 225.041L92.8828 223.388L102.189 240.677L99.5502 242.331ZM102.809 240.285L93.5024 222.996L96.1412 221.342L105.447 238.632L102.809 240.285ZM68.9043 33.7214L134.572 73.8915L134.581 220.361L106.072 238.245L96.4019 220.283L96.0933 220.48L70.7799 236.358L68.9043 33.7214ZM70.6938 237.311L73.3301 235.657L82.6364 252.947L79.9976 254.6L70.6914 237.311H70.6938Z"
          fill="white"
        />
        <path
          d="M36.7057 13.6649L34.8684 12.5462L38.5263 5.47562L37.4833 4.84229L33.8277 11.9128L31.9761 10.7863L32.7105 15.3988L36.7057 13.6649Z"
          fill="white"
        />
        <circle
          cx="32"
          cy="41"
          r="6"
          fill={order === 0 ? "#C89C6C" : "white"}
        />
        <circle
          cx="32"
          cy="151"
          r="6"
          fill={order === 1 ? "#C89C6C" : "white"}
        />
        <circle
          cx="102"
          cy="133"
          r="6"
          fill={order === 2 ? "#C89C6C" : "white"}
        />
        <circle
          cx="116"
          cy="311"
          r="6"
          fill={order === 3 ? "#C89C6C" : "white"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_313_699"
          x="0"
          y="0"
          width="159"
          height="349"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_313_699"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_313_699"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_313_699">
          <rect
            width="151"
            height="341"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FloorPlan;
