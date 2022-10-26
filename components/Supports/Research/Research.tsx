import React, { Fragment } from "react";
import { useLocale } from "../../../hooks";
import { TextCard } from "..";
import { supportsData } from "../../../public/pagesData/supports";

const Research = () => {
  const isEn = useLocale();
  return (
    <section className="flex flex-col gap-y-10">
      <h2 className="uppercase text-xl text-main-color absolute top-[-9999px] left-[-9999px]">
        {isEn ? "resaerch" : "研究"}
      </h2>
      {Object.keys(
        isEn ? supportsData.research.en : supportsData.research.cn
      ).map((i) => (
        <Fragment key={`research-${i}`}>
          <TextCard
            data={
              isEn ? supportsData.research.en[i] : supportsData.research.cn[i]
            }
            title={i}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default Research;
