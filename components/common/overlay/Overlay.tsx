import React, { FC, memo } from "react";
import cn from "clsx";

interface Props {
  className: string;
}

const Overlay: FC<Props> = ({ className }) => {
  return <div className={cn(className, "inset-0 bg-black opacity-50")}></div>;
};

export default memo(Overlay);
