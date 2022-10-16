import React, { Fragment } from "react";
import { useLocale } from "../../../hooks";
import { TextCard } from "..";
import { supportsData } from "../../../public/pagesData/supports";

const Project = () => {
  const isEn = useLocale();
  return (
    <section className="flex flex-col gap-y-10">
      <h2 className="uppercase text-xl text-main-color">
        {isEn ? "project" : "策劃"}
      </h2>
      {Object.keys(
        isEn ? supportsData.project.en : supportsData.project.cn
      ).map((i) => (
        <Fragment key={`project-${i}`}>
          <TextCard
            data={
              isEn ? supportsData.project.en[i] : supportsData.project.cn[i]
            }
            title={i}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default Project;
