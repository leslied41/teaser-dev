import React, { FC, createRef, useMemo, useEffect } from "react";
import { data } from "../TitleAndSubtitle/data";
import cn from "clsx";
import useBreakpoints from "../../../hooks/useBreakpoints";

interface Props {
  index: number;
  updateIndexRef: (index: number) => void;
  setUpdate: (update: boolean) => void;
  update: boolean;
}

const VideoBg: FC<Props> = ({ index, updateIndexRef, setUpdate, update }) => {
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
      if (i !== index) {
        e.current?.pause();
        e.current!.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    data.forEach((item, i) => {
      if (i === index) operate(index);
    });
  }, [elRefs, index]);

  useEffect(() => {
    const fns = elRefs.map((e, i) => {
      return () => {
        if (i === elRefs.length - 1) updateIndexRef(0);
        else updateIndexRef(i + 1);
        setUpdate(!update);
      };
    });

    elRefs.forEach((e, i) => {
      e.current?.addEventListener("ended", fns[i]);
    });

    return () => {
      elRefs.forEach((e, i) => {
        e.current?.removeEventListener("ended", fns[i]);
      });
    };
  }, [update]);

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
          className={cn("h-full w-full object-cover hidden ", {
            ["!block"]: index === i,
          })}
        >
          <source
            type="video/mp4"
            src={mobile ? item.mobileSrc : item.src}
          ></source>
        </video>
      ))}
    </>
  );
};

export default VideoBg;
