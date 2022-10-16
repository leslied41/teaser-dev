import React, { FC } from "react";
import { useLocale } from "../../../hooks";

interface CardProps {
  title: string;
  title_cn: string;
  src?: string;
}

const ArchiveCard: FC<CardProps> = ({ title, title_cn, src }) => {
  const isEn = useLocale();
  return (
    <section className="py-20 border-b-[1px] border-main-color">
      <h2 className="text-xl text-main-color">{isEn ? title : title_cn} </h2>
      <a
        className="inline-block text-lg px-2 py-[6px] bg-transparent border-[1px] border-white mt-4"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isEn ? "learn more" : "了解更多"}
      </a>
    </section>
  );
};

export default ArchiveCard;
