import React, { FC, createRef, useMemo, useEffect } from "react";
import { data } from "../TitleAndSubtitle/data";
import cn from "clsx";

interface Props {
  index: number;
}

const VideoBg: FC<Props> = ({ index }) => {
  const elRefs = useMemo(
    () =>
      Array(data.length)
        .fill(null)
        .map((_, index) => createRef<HTMLVideoElement>()),
    []
  );
  const operate = (index: number) => {
    elRefs.forEach((e, i) => {
      if (i === index) e.current?.play();
    });
  };
  useEffect(() => {
    if (index === 0) operate(0);
    if (index === 1) operate(1);
    if (index === 2) operate(2);
  }, [elRefs, index]);

  return (
    <>
      <video
        preload="auto"
        ref={elRefs[0]}
        src="/videoBgMain.mp4"
        muted
        loop
        className={cn("h-full w-full object-cover hidden ", {
          ["!block"]: index === 0,
        })}
      ></video>
      <video
        preload="auto"
        ref={elRefs[1]}
        src="/videoBgWanChai.mp4"
        muted
        loop
        className={cn("h-full w-full object-cover hidden ", {
          ["!block"]: index === 1,
        })}
      ></video>
      <video
        preload="auto"
        ref={elRefs[2]}
        src="/videoBgYuenLong.mp4"
        muted
        loop
        className={cn("h-full w-full object-cover hidden ", {
          ["!block"]: index === 2,
        })}
      ></video>
      {/* <video
        src="/videoBgMainMobile.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover block sm:hidden"
      ></video> */}
    </>
  );
};

export default VideoBg;
