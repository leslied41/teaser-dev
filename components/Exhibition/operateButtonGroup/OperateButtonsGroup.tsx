import React, { FC } from "react";
import { ArrowIcon } from "../../icons";
import cn from "clsx";

interface Props {
  handleIncrease: () => void;
  handleDecrease: () => void;
  showDetails: boolean;
}

const OperateButtonsGroup: FC<Props> = ({
  handleIncrease,
  handleDecrease,
  showDetails,
}) => {
  return (
    <>
      <button
        className={cn("absolute left-4 top-1/2 -translate-y-1/2", {
          ["pointer-events-none"]: showDetails,
        })}
        onClick={handleDecrease}
      >
        <ArrowIcon />
      </button>
      <button
        className={cn("absolute right-4 top-1/2 -translate-y-1/2 ", {
          ["pointer-events-none"]: showDetails,
        })}
        onClick={handleIncrease}
      >
        <ArrowIcon className="-rotate-180" />
      </button>
    </>
  );
};

export default OperateButtonsGroup;
