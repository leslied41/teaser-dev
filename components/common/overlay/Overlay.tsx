import React, { FC } from "react";
import cn from "clsx";

interface Props {
  className: string;
}

const Overlay: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "z-10 inset-0 bg-black opacity-50 pointer-events-none"
      )}
    ></div>
  );
};

export default Overlay;
