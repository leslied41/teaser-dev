import React, { FC } from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface Props {
  className?: string;
  obj: {
    title: string;
    subtitle: string;
    title_cn: string;
    subtitle_cn: string;
  };
  index: number;
}

const TitleAndSubtitle: FC<Props> = ({ className, obj, index }) => {
  const router = useRouter();
  return (
    <div
      className={cn("flex flex-col w-fit uppercase", className, {
        ["!flex-row"]: index !== 0 || router.locale === "cn",
      })}
    >
      <p
        className={cn("text-title-color text-lg sm:text-xl", {
          ["!text-xxl-cn sm:!text-xxl"]: router.locale === "cn",
        })}
      >
        <span
          className={cn("bg-black inline-block", {
            ["!bg-white"]: index !== 0,
          })}
        >
          {router.locale === "en" ? obj.title : obj.title_cn}
        </span>
      </p>
      <p
        className={cn("text-title-color text-base sm:text-lg flex items-end", {
          ["text-base sm:!text-ml"]: router.locale === "cn",
        })}
      >
        <span
          className={cn("bg-black  flex items-center justify-center", {
            ["!bg-white"]: index !== 0,
          })}
        >
          {index !== 0 && (
            <ArrowRightAltIcon className="text-base sm:!text-lg" />
          )}
          {router.locale === "en" ? obj.subtitle : obj.subtitle_cn}
        </span>
      </p>
    </div>
  );
};
export default TitleAndSubtitle;
