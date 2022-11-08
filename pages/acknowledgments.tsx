import React from "react";
import { NormalPageLayout, SEO } from "../components/common";
import { Exhibition } from "../components/Supports";
import { useLocale } from "../hooks";
import { supportsData } from "../public/pagesData/supports";

const Acknowledgment = () => {
  const isEn = useLocale();
  return (
    <>
      <SEO title={isEn ? "Acknowledgments" : "鳴謝"} />
      <div className="flex flex-col gap-y-20">
        <section aria-label="introduction">
          <h1 className="text-lg uppercase text-main-color">
            {isEn ? "acknowledgements" : "鳴謝"}
          </h1>
          <p className="text-m-1 mt-20">
            {isEn ? supportsData.introduction.en : supportsData.introduction.cn}
          </p>
        </section>
        <Exhibition />
      </div>
    </>
  );
};

Acknowledgment.Layout = NormalPageLayout;
export default Acknowledgment;
