import React from "react";
import Link from "next/link";
import { NormalPageLayout } from "../components/common";
import { NavArrowIcon } from "../components/icons";
import { useLocale } from "../hooks";
import { data } from "../public/pagesData/sixlocations";
import cn from "clsx";

const SixLocationsArtists = () => {
  const isEn = useLocale();
  return (
    <div>
      <nav aria-label="locations and artists navigations">
        <ul className="">
          {data.map((e) => (
            <li
              key={`6locations-${e.en}`}
              className="px-2 py-6 border-y-[1px] border-main-color"
            >
              <Link href={`/six/${e.slug}`}>
                <a
                  className={cn(
                    "flex justify-between text-xl text-main-color gap-x-[100px]",
                    {
                      ["gap-x-80"]: !isEn,
                    }
                  )}
                >
                  <span>{isEn ? e.en : e.cn}</span>
                  <NavArrowIcon className="shrink-0" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

SixLocationsArtists.Layout = NormalPageLayout;
export default SixLocationsArtists;
