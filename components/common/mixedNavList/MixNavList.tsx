import React, { FC, memo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "../../../hooks";
import { Button } from "..";
import { NavArrowIcon, PlayButtonIcon, PauseIcon } from "../../icons";
import cn from "clsx";

export type Item = {
  en?: string;
  cn?: string;
  link?: string;
  audio?: string;
  download?: string;
  contact?: string;
  title?: string;
  title_cn?: string;
  info?: string;
  info_cn?: string;
  map?: string;
  floorPlan?: string;
  images?: any;
};

interface NavListProps {
  list: Item[] | undefined;
  className: string;
  downloadClassName: string;
  linkClassName?: string;
  playClassName?: string;
  ariaLabel?: string;
  gap?: boolean;
}

const MixNavList: FC<NavListProps> = ({
  list,
  className,
  downloadClassName,
  linkClassName,
  playClassName,
  ariaLabel,
  gap = false,
}) => {
  const isEn = useLocale();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  useEffect(() => {
    if (audioRef.current === null) return;
    audioRef.current.addEventListener("ended", () => setAudioPlaying(false));
  }, []);

  const operateAudio = () => {
    if (audioRef.current === null) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul
        className={cn("flex flex-col", {
          ["gap-y-20"]: gap,
        })}
      >
        {list?.map((l) => {
          if (l.hasOwnProperty("download"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  downloadClassName
                )}
              >
                <div className="flex justify-between items-center">
                  <span>{isEn ? l.en : l.cn}</span>
                  <Button
                    variant="secondary"
                    Component="a"
                    href={l.download}
                    download
                    className="!text-sm"
                  >
                    {isEn ? "download" : "下載"}
                  </Button>
                </div>
              </li>
            );
          else if (l.hasOwnProperty("link"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  linkClassName
                )}
              >
                <Link href={l.link!}>
                  <a href={l.link} className="flex justify-between">
                    <div className="flex flex-col">
                      <span>
                        {isEn
                          ? `${l.en?.split("/")[0]}/`
                          : `${l.cn?.split("/")[0]}/`}
                      </span>
                      <span>
                        {isEn ? l.en?.split("/")[1] : l.cn?.split("/")[1]}
                      </span>
                    </div>
                    <NavArrowIcon className="shrink-0" />
                  </a>
                </Link>
              </li>
            );
          else if (l.hasOwnProperty("contact"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  downloadClassName
                )}
              >
                <div className="flex justify-between">
                  <span>{isEn ? l.en : l.cn}</span>
                  <Button
                    variant="secondary"
                    Component="a"
                    href={l.contact}
                    className="!text-sm"
                  >
                    {isEn ? "contact us" : "聯絡我們"}
                  </Button>
                </div>
              </li>
            );
          else if (l.hasOwnProperty("audio"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  playClassName
                )}
              >
                <audio ref={audioRef}>
                  <source src={l.audio} type="audio/mpeg" />
                </audio>
                <div className="flex justify-between items-center w-full uppercase">
                  <div className="flex flex-col">
                    <span className="text-start">{isEn ? l.en : l.cn}</span>
                    <span className="text-start">
                      {isEn ? l.title : l.title_cn}
                    </span>
                    <span className="text-start text-sm normal-case">
                      {isEn ? l.info : l.info_cn}
                    </span>
                  </div>

                  <button
                    aria-label={audioPlaying ? "pause" : "play"}
                    onClick={operateAudio}
                  >
                    {audioPlaying ? (
                      <PauseIcon className="shrink-0 " />
                    ) : (
                      <PlayButtonIcon className="shrink-0 " />
                    )}
                  </button>
                </div>
              </li>
            );
        })}
      </ul>
    </nav>
  );
};

export default memo(MixNavList);
