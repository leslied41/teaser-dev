import React, { Fragment } from "react";
import { useLocale } from "../hooks";
import { ArchiveCard } from "../components/archives";
import { NormalPageLayout } from "../components/common";
import { introduction, items } from "../public/pagesData/archives";

const Archives = () => {
  const isEn = useLocale();
  return (
    <>
      <section aria-label="introduction">
        <p className="text-m-1">{isEn ? introduction.en : introduction.cn}</p>
      </section>
      <div>
        {items.map((item) => (
          <Fragment key={item.title}>
            <ArchiveCard
              title={item.title}
              title_cn={item.title_cn}
              src={item.src}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

Archives.Layout = NormalPageLayout;
export default Archives;
