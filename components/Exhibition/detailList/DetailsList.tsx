import React from "react";
import Link from "next/link";
import { useLocale } from "../../../hooks";
import { PdfIcon, NavArrowIcon } from "../../icons";

const list = [
  { en: "preface", cn: "前言", pdf: "" },
  { en: "forward", cn: "序", pdf: "" },
  { en: "curatorial statement", cn: "策展論述", pdf: "" },
  { en: "6 locations/6 artists", cn: "六處地方/六位藝術家", link: "/" },
  { en: "catalogue", cn: "畫冊", pdf: "" },
  { en: "activities", cn: "活動", pdf: "" },
];
Object.freeze(list);
interface ListProps {
  className?: string;
}

const DetailsList = ({ className }: ListProps) => {
  const isEn = useLocale();
  return (
    <nav aria-label="exhibition details navigation" className={className}>
      <ul>
        {list.map((l) => {
          if (l.hasOwnProperty("pdf"))
            return (
              <li
                key={l.en}
                className="text-xl text-main-color uppercase px-2 py-6 border-b-[1px] border-main-color"
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
          else
            return (
              <li
                key={l.en}
                className="text-xl text-main-color uppercase px-2 py-6 border-b-[1px] border-main-color"
              >
                <Link href={l.link!}>
                  <a href={l.link} className="flex justify-between">
                    <span>{isEn ? l.en : l.cn}</span>
                    <NavArrowIcon />
                  </a>
                </Link>
              </li>
            );
        })}
      </ul>
    </nav>
  );
};

export default DetailsList;
