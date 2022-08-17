import React, { FC, createRef, useMemo, useEffect } from "react";
import { data } from "../TitleAndSubtitle/data";
import cn from "clsx";
import s from "./VideoBg.module.css";

interface Props {
  index: number;
}

const VideoBg: FC<Props> = ({ index }) => {
  const elRefs = useMemo(
    () =>
      Array(data.length)
        .fill(null)
        .map((_, index) => createRef<HTMLVideoElement>()),
    [data]
  );
  const operate = (index: number) => {
    elRefs.forEach((e, i) => {
      if (i === index) e.current?.play();
    });
  };

  useEffect(() => {
    data.forEach((item, i) => {
      if (i === index) operate(index);
    });
  }, [elRefs, index]);

  return (
    <>
      {data.map((item, i) => (
        <video
          key={item.title}
          playsInline={true}
          controls={false}
          preload="auto"
          ref={elRefs[i]}
          src={item.src}
          muted
          loop
          className={cn("h-full w-full object-cover hidden ", {
            ["!block"]: index === i,
          })}
        ></video>
      ))}
    </>
  );
};

export default VideoBg;
