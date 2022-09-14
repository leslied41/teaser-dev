import React, { FC, useEffect, useState } from "react";
import cn from "clsx";
import s from "./ProgressBar.module.css";
interface Props {
  className: string;
  index: number | null;
}

const ProgressBar: FC<Props> = ({ className, index }) => {
  const [startAnimate, setStartAnimate] = useState(false);
  useEffect(() => {
    setStartAnimate(true);
  }, []);
  return (
    <div className={cn(className)}>
      <div className="flex">
        {Array(7)
          .fill("")
          .map((item, i) => {
            return (
              <div key={i} className={cn("flex-1 h-1  ", s.tab, {})}>
                <div
                  className={cn("flex-1 h-1  bg-white w-0  ", {
                    ["!w-full transition-all duration-[10000ms] ease-linear"]:
                      i === index && startAnimate,
                    //this is to fix the first render that will make the first tab full-width.
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
