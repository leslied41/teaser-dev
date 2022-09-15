import React, { FC } from "react";
import { ArrowIcon } from "../../icons";

interface Props {
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const OperateButtonsGroup: FC<Props> = ({ handleIncrease, handleDecrease }) => {
  return (
    <>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={handleDecrease}
      >
        <ArrowIcon />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleIncrease}
      >
        <ArrowIcon className="-rotate-180" />
      </button>
    </>
  );
};

export default OperateButtonsGroup;
