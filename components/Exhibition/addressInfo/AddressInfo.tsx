import React, { memo } from "react";
import cn from "clsx";

interface Props {
  className: string;
}

const AddressInfo = ({ className }: Props) => {
  return (
    <div className={cn(className, "flex flex-col text-sm text-white")}>
      <p>4/F, Pao Galleries</p>
      <p>Hong Kong Art Centre</p>
    </div>
  );
};

export default memo(AddressInfo);
