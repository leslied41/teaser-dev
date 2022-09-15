import React, { FC, memo } from "react";
import s from "./ExhibitionInfo.module.css";
import cn from "clsx";
import { useRouter } from "next/router";
import { sponsors, curators } from "./data";

interface Props {
  className?: string;
}

const ExhibitionInfo: FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <>
      <div className="fixed top-[26px] sm:top-8 left-2 sm:left-3 p-2 bg-white w-fit  text-title-color text-m mix-blend-normal">
        <p
          className={cn("w-fit uppercase", {
            ["!w-[254px] sm:!w-fit"]: router.locale === "en",
          })}
        >
          {router.locale === "en"
            ? "The official website will be launched on 8・10・2022"
            : "正式網頁將於 8・10・2022 公佈"}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col gap-y-5 text-base sm:text-sm text-white mix-blend-exclusion",
          className,
          {
            ["!text-sm-cn sm:!text-base-cn"]: router.locale === "cn",
          }
        )}
      >
        <div
          className={cn("text-m", {
            ["text-m-cn"]: router.locale === "cn",
          })}
        >
          <p>8 — 30·10·2022</p>
          <p>
            {router.locale === "en"
              ? "4/F, Pao Gallery"
              : "香港藝術中心四樓包氏畫廊"}
          </p>
          {router.locale === "en" && <p>Hong Kong Arts Centre</p>}
        </div>
        <div>
          <p>8 — 29·10·2022 (10:00 — 20:00)</p>
          <p>30·10·2022 (10:00 — 16:00)</p>
          <p>
            {router.locale === "en"
              ? "Opening: 7·10·2022 (18:30 onwards)"
              : "開幕: 7·10·2022 (18:30 始)"}
          </p>
        </div>
        <div>
          <p>
            {router.locale === "en"
              ? "Co-presented by Jumu Tang & HKAC"
              : "舉目堂・香港藝術中心呈獻"}
          </p>
          <p>
            {router.locale === "en"
              ? "Supported by AVA & KTO, HKBU・HKADC"
              : "香港浸會大學視覺藝術院 & "}
          </p>
          <p></p>
          <p>
            {router.locale === "en"
              ? "Highlighted Programme of"
              : "知識轉移處・香港藝術發展局支持"}
          </p>
          <p>
            {router.locale === "en"
              ? "HKAC's 45th Anniversary Celebration"
              : "香港藝術中心四十五週年誌慶重點節目"}
          </p>
        </div>
        <div>
          <p className="text-sm">
            {router.locale === "en" ? "Curators" : "策展人"}
          </p>
          {curators.map((i, index) => (
            <p key={index}>{router.locale === "en" ? i.name_en : i.name_cn}</p>
          ))}
        </div>
        <div>
          <p className="text-sm">
            {router.locale === "en" ? "Sponsors" : "贊助"}
          </p>
          {sponsors.map((i, index) => (
            <p key={index}>{router.locale === "en" ? i.name_en : i.name_cn}</p>
          ))}
        </div>
      </div>
    </>
  );
};
export default memo(ExhibitionInfo);
