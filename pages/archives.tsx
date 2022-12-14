import React, { Fragment } from "react";
import { useLocale } from "../hooks";
import { ArchiveCard } from "../components/archives";
import { NormalPageLayout, SEO } from "../components/common";
import { introduction, items } from "../public/pagesData/archives";
import cn from "clsx";

const Archives = () => {
  const isEn = useLocale();

  return (
    <>
      <SEO title={isEn ? "Archives" : "檔案"} />
      <section aria-label="introduction">
        <h1 className="text-lg uppercase text-main-color">
          {isEn ? "archives" : "檔案"}
        </h1>
        <p className={cn("text-m-1 mt-20", { ["leading-8"]: !isEn })}>
          {isEn ? introduction.en : introduction.cn}
        </p>
      </section>
      <div>
        {items.map((item) => (
          <Fragment key={item.title}>
            <ArchiveCard
              title={item.title}
              title_cn={item.title_cn}
              subtitle={item.subtitle}
              subtitle_cn={item.subtitle_cn}
              src={item.src}
              variant={item.src ? "a" : "button"}
              download={item.download}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

Archives.Layout = NormalPageLayout;
export default Archives;
