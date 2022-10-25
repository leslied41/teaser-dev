import React, { memo } from "react";
import { MixedNavList } from "../../common";
import cn from "clsx";

const list = [
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/",
  },
  {
    en: `'cumulus'`,
    cn: `<積雲>`,
    title: `musical interpretation of 'timbuktu'`,
    title_cn: `「 山旮旯 」樂韻迴響 `,
    info: "Composed by Priscila Chu",
    info_cn: "朱曉芳作曲",
    audio: "",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/",
  },
];

Object.freeze(list);

interface NavListProps {
  className?: string;
}

const NavList = ({ className }: NavListProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center mt-[127px]  py-20 h-fit",
        className
      )}
    >
      <MixedNavList
        ariaLabel="artist page navigation"
        className="w-[600px]"
        downloadClassName="text-m-1"
        playClassName="text-m-1"
        list={list}
        gap
      />
    </div>
  );
};

export default memo(NavList);
