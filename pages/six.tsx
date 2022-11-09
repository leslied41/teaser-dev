import React from "react";
import Link from "next/link";
import { GlobalLayout, SEO } from "../components/common";
import { useLocale } from "../hooks";
import { data } from "../public/pagesData/sixlocations";
import cn from "clsx";

const SixLocationsArtists = () => {
  const isEn = useLocale();
  const style = (i: number) => {
    if (isEn && [1, 3, 5, 7, 9, 11].includes(i)) return { color: "white" };
    else if (!isEn && [1, 3, 5, 7, 9, 11].includes(i))
      return { color: "white" };
  };
  return (
    <>
      <SEO title={isEn ? "6 Locations/6 Artists" : "六處地方/六位藝術家"} />
      <div className="px-5 md:px-10 h-[calc(var(--vh)*100)] flex justify-center items-center">
        <nav
          aria-label="locations and artists navigations"
          className="max-w-[1200px]"
        >
          <ul className="flex flex-wrap  gap-x-5 ">
            {data.map((e, i) => (
              <li
                key={`6locations-${e.en}`}
                className={cn("text-xm md:text-xl text-main-color uppercase", {
                  ["md:leading-[60px]"]: !isEn,
                })}
                style={style(i)}
              >
                <Link href={`/${e.slug}`}>
                  <a className={cn("flex items-center ")}>
                    <span>{isEn ? e.en : e.cn}</span>
                    {i !== data.length - 1 && (
                      <span className="inline-block h-[18px] md:h-[56px] w-4 md:w-5 border-r-[1px] border-main-color"></span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

SixLocationsArtists.Layout = GlobalLayout;
export default SixLocationsArtists;
