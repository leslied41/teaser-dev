import React, { FC, createRef, useMemo, useEffect } from "react";
import { data } from "../TitleAndSubtitle/data";
import cn from "clsx";
import useBreakpoints from "../../hooks/useBreakpoints";

interface Props {
  index: number;
}

const VideoBg: FC<Props> = ({ index }) => {
  const { mobile } = useBreakpoints();
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
          muted
          loop
          className={cn("h-full w-full object-cover hidden ", {
            ["!block"]: index === i,
          })}
        >
          <source
            type="video/mp4"
            src={mobile ? item.mobileSrc : item.src}
            className="hidden sm:block"
          ></source>
        </video>
      ))}
    </>
  );
};

export default VideoBg;
