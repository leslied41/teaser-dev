import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import { SliderProps } from "../slider/Slider";
import cn from "clsx";
import { Info } from "../../../public/six/data";

interface ArtworkInfoProps extends SliderProps {
  info?: Info;
}

const ArtworkInfo: FC<ArtworkInfoProps> = ({ className, info }) => {
  const isEn = useLocale();
  return (
    <section className={className}>
      <h2
        className={cn("text-xm text-main-color ", {
          ["italic"]: isEn,
        })}
      >
        {isEn ? info?.en.title : info?.cn.title}
      </h2>
      <p className="text-sm text-secondary-color">
        {isEn ? info?.en.intro : info?.cn.intro}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn ? info?.en.specification : info?.cn.specification}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn ? info?.en.dimension : info?.cn.dimension}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn ? info?.en.date : info?.cn.date}
      </p>
    </section>
  );
};

export default ArtworkInfo;
