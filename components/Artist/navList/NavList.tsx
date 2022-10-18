import React from "react";
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
    en: "music interaction",
    cn: "音韻迴響",
    player: true,
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
        "flex justify-center items-center bg-black h-[580px]",
        className
      )}
    >
      <MixedNavList
        ariaLabel="artist page navigation"
        className="w-[600px]"
        pdfClassName="text-xl"
        linkClassName="text-xl"
        list={list}
      />
    </div>
  );
};

export default NavList;
