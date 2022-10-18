import React, { useMemo, memo } from "react";
import { useRouter } from "next/router";
import cn from "clsx";

const CurrentLabel = () => {
  const router = useRouter();

  console.log((router.query.slug as string).toLowerCase());
  let title = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return "about";
        case "/archives":
          return "archives";
        case "/exhibition":
          return "exhibition";
        case "/supports":
          return "supports";
        case "/six":
          return "6 locations/6 artists";
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return "ho yuen leunG";
        case "koonwaibong":
          return "koon wai bong";
        case "lamtungpang":
          return "lam tung pang";
        case "leungkayin":
          return "leung ka yin";
        case "wongchunhei":
          return "wong chun hei";
        case "wonglaiching":
          return "wong lai ching";
      }
    }
  }, [router.pathname]);

  let title_cn = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return "概述";
        case "/archives":
          return "檔案";
        case "/exhibition":
          return "展覽";
        case "/supports":
          return "鳴謝";
        case "/six":
          return "六處地方/六位藝術家";
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return "何遠良";
        case "koonwaibong":
          return "管偉邦";
        case "lamtungpang":
          return "林東鵬";
        case "leungkayin":
          return "梁嘉賢";
        case "wongchunhei":
          return "黃進曦";
        case "wonglaiching":
          return "黃麗貞";
      }
    }
  }, [router.pathname]);

  return (
    <div
      className={cn(
        "flex items-center justify-center fixed left-0 bottom-0 px-2 pt-1 pb-1 bg-white ",
        { ["hidden"]: router.pathname === "/" }
      )}
    >
      <h1 className="text-xl text-main-color uppercase">
        {router.locale === "en" ? title : title_cn}
      </h1>
    </div>
  );
};

export default memo(CurrentLabel);
