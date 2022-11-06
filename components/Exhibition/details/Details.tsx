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
          <p className={cn("text-m", { ["leading-7"]: !isEn })}>
            {isEn ? intro.en : intro.cn}
          </p>
        </section>
        <section>
          <h2 className="text-main-color text-m">
            {isEn ? exhibition.title.en : exhibition.title.cn}
          </h2>
          <ul>
            {(isEn ? exhibition.date.en : exhibition.date.cn).map((d) => (
              <li key={d} className={cn("text-m", { ["leading-7"]: !isEn })}>
                {d}
              </li>
            ))}
          </ul>
          <ul>
            {(isEn ? exhibition.venue.en : exhibition.venue.cn).map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          {isEn ? (
            <div className="mt-5">
              <div>
                <p className="text-main-color uppercase">co-presented by</p>
                <p>{exhibition.supports.en[0]}</p>
              </div>
              <div>
                <p className="text-main-color uppercase mt-5">supported by</p>
                <p>{exhibition.supports.en[1]}</p>
                <p>{exhibition.supports.en[2]}</p>
                <p className="mt-5">{exhibition.supports.en[3]}</p>
              </div>
            </div>
          ) : (
            <ul className="mt-5">
              {exhibition.supports.cn.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </section>
        <TextCard
          title={isEn ? "artists" : "藝術家"}
          data={isEn ? artists.en : artists.cn}
          Heading="h2"
          headingClassName={cn("text-m", { ["leading-7"]: !isEn })}
          bodyClassName={cn("text-lg uppercase", { ["leading-9"]: !isEn })}
          link
        />
        <TextCard
          title={isEn ? "curator" : "策展人"}
          data={isEn ? curator.en : curator.cn}
          Heading="h2"
          headingClassName="text-m"
        />
      </div>

      <DetailList className="mt-20" />
    </div>
  );
};

export default memo(Details);
