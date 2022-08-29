import React, { FC } from "react";
import cn from "clsx";
import s from "./ProgressBar.module.css";
interface Props {
  className: string;
  index: number;
}

const ProgressBar: FC<Props> = ({ className, index }) => {
  return (
    <div className={cn(className)}>
      <div className="flex  mx-2 sm:mx-3 gap-1 sm:gap-4">
        {Array(7)
          .fill("")
          .map((item, i) => {
            return (
              <div key={i} className={cn("flex-1 h-1 sm:h-[6px] ", s.tab, {})}>
                <div
                  className={cn("flex-1 h-1 sm:h-[6px] bg-white w-0  ", {
                    ["!w-full transition-all duration-[10000ms] ease-linear"]:
                      i === index,
                  })}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProgressBar;
