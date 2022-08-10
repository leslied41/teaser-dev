import React, { FC } from "react";
import s from "./ExhibitionInfo.module.css";
import cn from "clsx";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

const ExhibitionInfo: FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        " flex flex-col gap-y-10 text-base text-white mix-blend-exclusion",
        className
      )}
    >
      <div>
        <p>7 — 29 ·10·2022</p>
        <p>10:00am — 08:00pm</p>
        <p>{router.locale === "en" ? "4/F, Pao Gallery" : "4/F 包氏畫廊"}</p>
        {router.locale === "en" ? (
          <>
            <p>Hong Kong Arts Centre,</p>
            <p>2 Harbour Road, Wan Chai,</p>
          </>
        ) : (
          <p> 灣仔港灣道2號香港藝術中心</p>
        )}
        {router.locale === "en" ? <p>Hong Kong</p> : ""}
      </div>
      <div>
        <p className="text-sm">
          {router.locale === "en" ? "Curators" : "策展人"}
        </p>
        <p>{router.locale === "en" ? "Koon Wai Bong" : "管偉邦"}</p>
        <p>{router.locale === "en" ? "Ting Wing Yan, Vivian" : "丁穎茵"}</p>
      </div>
      <div>
        <p className="text-sm">
          {router.locale === "en" ? "Researchers" : "研究員"}
        </p>
        <p>{router.locale === "en" ? "Chan Pui, Pedith" : "陳蓓"}</p>
        <p>{router.locale === "en" ? "Ting Wing Yan, Vivian" : "丁穎茵"}</p>
      </div>
    </div>
  );
};
export default ExhibitionInfo;
