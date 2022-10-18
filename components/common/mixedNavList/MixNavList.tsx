import React, { FC } from "react";
import Link from "next/link";
import { useLocale } from "../../../hooks";
import { PdfIcon, NavArrowIcon, DownloadIcon } from "../../icons";
import cn from "clsx";

type item = {
  en: string;
  cn: string;
  pdf?: string;
  link?: string;
  player?: boolean;
  download?: string;
};

interface NavListProps {
  list: item[];
  className: string;
  pdfClassName: string;
  linkClassName: string;
  ariaLabel?: string;
}

const MixNavList: FC<NavListProps> = ({
  list,
  className,
  pdfClassName,
  linkClassName,
  ariaLabel,
}) => {
  const isEn = useLocale();

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul>
        {list.map((l) => {
          if (l.hasOwnProperty("pdf"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  pdfClassName
                )}
              >
                <a
                  href={l.pdf}
                  className="flex justify-between"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{isEn ? l.en : l.cn}</span>
                  <PdfIcon className="shrink-0" />
                </a>
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
                    <span>{isEn ? l.en : l.cn}</span>
                    <NavArrowIcon className="shrink-0" />
                  </a>
                </Link>
              </li>
            );
          else if (l.hasOwnProperty("download"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  linkClassName
                )}
              >
                <a href={l.download} className="flex justify-between">
                  <span>{isEn ? l.en : l.cn}</span>
                  <DownloadIcon className="shrink-0" />
                </a>
              </li>
            );
          else if (l.hasOwnProperty("player"))
            return (
              <li
                key={l.en}
                className={cn(
                  "text-main-color uppercase px-2 py-6 border-y-[1px] border-main-color",
                  linkClassName
                )}
              >
                <button className="flex justify-between w-full uppercase">
                  <span className="text-start">{isEn ? l.en : l.cn}</span>
                  <NavArrowIcon className="shrink-0" />
                </button>
              </li>
            );
        })}
      </ul>
    </nav>
  );
};

export default MixNavList;
