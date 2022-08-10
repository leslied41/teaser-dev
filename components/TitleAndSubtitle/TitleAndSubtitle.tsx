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
  console.log(index);
  const router = useRouter();
  return (
    <div
      className={cn("flex flex-col w-fit uppercase", className, {
        ["!flex-row"]: index !== 0 || router.locale === "cn",
      })}
    >
      <p className=" text-title-color text-xl">
        <span
          className={cn("bg-black inline-block", {
            ["!bg-white"]: index !== 0,
          })}
        >
          {router.locale === "en" ? obj.title : obj.title_cn}
        </span>
      </p>
      <p className={cn("text-title-color text-lg flex items-end")}>
        <span
          className={cn("bg-black  flex items-center justify-center", {
            ["!bg-white"]: index !== 0,
          })}
        >
          {index !== 0 && <ArrowRightAltIcon className="!text-lg" />}
          {router.locale === "en" ? obj.subtitle : obj.subtitle_cn}
        </span>
      </p>
    </div>
  );
};
export default TitleAndSubtitle;
