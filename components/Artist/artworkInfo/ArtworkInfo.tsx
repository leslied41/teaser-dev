import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import { SliderProps } from "../slider/Slider";
import cn from "clsx";

const data = [
  {
    en: {
      title: "From Here to Timbuktu",
      intro: "Installation: ink-on-silk album leaves & lightbox",
      specification: "A set of 8 works",
      dimension: "Dimension variable",
      date: "2022",
      image: "",
    },
    cn: {
      title: "《 山旮旯記 》",
      intro: " 裝置:水墨絹本冊頁及燈箱",
      specification: "一組八件作品",
      dimension: "尺寸不定",
      date: "2022",
      image: "",
    },
  },
  {
    en: {
      title: "Hi It is a test",
      intro: "test",
      specification: "test",
      dimension: "test",
      date: "1111",
      image: "",
    },
    cn: {
      title: "《 測試紀 》",
      intro: "test",
      specification: "test",
      dimension: "test",
      date: "1111",
      image: "",
    },
  },
];

const ArtworkInfo: FC<SliderProps> = ({
  className,
  currentIndex,
  setCurrentIndex,
}) => {
  const isEn = useLocale();
  return (
    <section className={className}>
      <h2
        className={cn("text-xm text-main-color ", {
          ["italic"]: isEn,
        })}
      >
        {isEn ? data[currentIndex].en.title : data[currentIndex].cn.title}
      </h2>
      <p className="text-sm text-secondary-color">
        {isEn ? data[currentIndex].en.intro : data[currentIndex].cn.intro}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn
          ? data[currentIndex].en.specification
          : data[currentIndex].cn.specification}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn
          ? data[currentIndex].en.dimension
          : data[currentIndex].cn.dimension}
      </p>
      <p className="text-sm text-secondary-color">
        {isEn ? data[currentIndex].en.date : data[currentIndex].cn.date}
      </p>
    </section>
  );
};

export default ArtworkInfo;
