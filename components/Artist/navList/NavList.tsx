import React, { memo } from "react";
import { MixedNavList } from "../../common";
import cn from "clsx";
import { Item } from "../../common/mixedNavList/MixNavList";

interface NavListProps {
  className?: string;
  list: Item[] | undefined;
}

const NavList = ({ className, list }: NavListProps) => {
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
