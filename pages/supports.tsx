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
        <p className="text-m-1">
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
