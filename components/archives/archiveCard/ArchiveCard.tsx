import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import { Button } from "../../common";

interface CardProps {
  title: string;
  title_cn: string;
  subtitle: string;
  subtitle_cn: string;
  src?: string;
  variant?: "button" | "a";
  download?: boolean;
}

const ArchiveCard: FC<CardProps> = ({
  title,
  title_cn,
  subtitle,
  subtitle_cn,
  src,
  variant = "button",
  download = false,
}) => {
  const isEn = useLocale();

  return (
    <section className="py-20 border-b-[1px] border-main-color">
      <h2 className="text-lg text-main-color">{isEn ? title : title_cn} </h2>
      <p className="text-m-1 uppercase text-main-color">
        {isEn ? subtitle : subtitle_cn}
      </p>
      {variant === "a" && !download ? (
        <Button
          Component="a"
          variant="link"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          {isEn ? "learn more" : "了解更多"}
        </Button>
      ) : variant === "a" && download ? (
        <Button
          Component="a"
          variant="link"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
          download
        >
          {isEn ? "learn more" : "了解更多"}
        </Button>
      ) : (
        <Button Component="button" variant="link" className="mt-4">
          {isEn ? "learn more" : "了解更多"}
        </Button>
      )}
    </section>
  );
};

export default ArchiveCard;
