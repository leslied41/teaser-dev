import React from "react";
import { NormalPageLayout } from "../components/common";
import { Research, Exhibition, Project } from "../components/Supports";
import { useLocale } from "../hooks";
import { supportsData } from "../public/pagesData/supports";

const Supports = () => {
  const isEn = useLocale();
  return (
    <div className="flex flex-col gap-y-20">
      <section aria-label="introduction">
        <h1 className="text-lg uppercase text-main-color">
          {isEn ? "acknowledgement" : "鳴謝"}
        </h1>
        <p className="text-m-1 mt-20">
          {isEn ? supportsData.introduction.en : supportsData.introduction.cn}
        </p>
      </section>
      <Research />
      <Exhibition />
      <Project />
    </div>
  );
};

Supports.Layout = NormalPageLayout;
export default Supports;
