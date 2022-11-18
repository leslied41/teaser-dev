import React, { FC, memo } from "react";
import { useLocale } from "../../../hooks";
import { TextCard } from "../../Supports";
import DetailList from "../detailList";
import cn from "clsx";
import { data } from "./data";

interface DetailsProps {
  className: string;
}

const Details: FC<DetailsProps> = ({ className }) => {
  const isEn = useLocale();
  const { intro, exhibition, artists, curator } = data;
  return (
    <div className={cn(className, "max-w-[600px] pb-20 ")}>
      <div className="flex flex-col gap-y-5">
        <section aria-label="details introduction">
          <p className={cn("text-m-1", { ["text-m-1-cn"]: !isEn })}>
            {isEn ? intro.en : intro.cn}
          </p>
        </section>
        <section>
          <h2
            className={cn("text-main-color text-lg", {
              ["text-lg-2"]: !isEn,
            })}
          >
            {isEn ? exhibition.title.en : exhibition.title.cn}
          </h2>
          <ul>
            {(isEn ? exhibition.date.en : exhibition.date.cn).map((d) => (
              <li
                key={d}
                className={cn("text-m-1", { ["text-m-1-cn"]: !isEn })}
              >
                {d}
              </li>
            ))}
          </ul>
          <ul>
            {(isEn ? exhibition.venue.en : exhibition.venue.cn).map((v) => (
              <li
                key={v}
                className={cn("text-m-1", { ["text-m-1-cn"]: !isEn })}
              >
                {v}
              </li>
            ))}
          </ul>
          {isEn ? (
            <div className="mt-5">
              <div>
                <p
                  className={cn("text-m-1 text-main-color uppercase", {
                    ["text-m-1-cn"]: !isEn,
                  })}
                >
                  co-presented by
                </p>
                <p
                  className={cn("text-m-1 ", {
                    ["text-m-1-cn"]: !isEn,
                  })}
                >
                  {exhibition.supports.en[0]}
                </p>
              </div>
              <div
                className={cn("text-m-1 ", {
                  ["text-m-1-cn"]: !isEn,
                })}
              >
                <p className="text-main-color uppercase  mt-5">supported by</p>
                <p>{exhibition.supports.en[1]}</p>
                <p>{exhibition.supports.en[2]}</p>
                <p className="mt-5">{exhibition.supports.en[3]}</p>
              </div>
            </div>
          ) : (
            <ul className="mt-5">
              {exhibition.supports.cn.map((s) => (
                <li
                  key={s}
                  className={cn("text-m-1  uppercase", {
                    ["text-m-1-cn"]: !isEn,
                  })}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </section>
        <TextCard
          title={isEn ? "artists" : "藝術家"}
          data={isEn ? artists.en : artists.cn}
          Heading="h2"
          headingClassName={cn("text-m-1-cn", { ["text-m-1"]: isEn })}
          bodyClassName={cn("text-m-1-cn", { ["text-m-1"]: isEn })}
          link
        />
        <TextCard
          title={isEn ? "curator" : "策展人"}
          data={isEn ? curator.en : curator.cn}
          Heading="h2"
          headingClassName={cn("text-m-1-cn", { ["text-m-1"]: isEn })}
          bodyClassName={cn("text-m-1-cn", { ["text-m-1"]: isEn })}
        />
      </div>

      <DetailList className="mt-20" />
    </div>
  );
};

export default memo(Details);
