import React, { useMemo, memo } from "react";
import { useRouter } from "next/router";
import cn from "clsx";

const CurrentLabel = () => {
  const router = useRouter();

  let title = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return "about";
          break;
        case "/archives":
          return "archives";
          break;
        case "/exhibition":
          return "exhibition";
          break;
        case "/acknowledgment":
          return "acknowledgment";
          break;
        case "/six":
          return "6 locations/6 artists";
          break;
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return "ho yuen leunG";
          break;
        case "koonwaibong":
          return "koon wai bong";
          break;
        case "lamtungpang":
          return "lam tung pang";
          break;
        case "leungkayin":
          return "leung ka yin";
          break;
        case "wongchunhei":
          return "wong chun hei";
          break;
        case "wonglaiching":
          return "wong lai ching";
          break;
        case "kowloonmountainranges":
          return "kow loon mountain ranges";
          break;
        case "thepeak":
          return "the peak";
          break;
        case "northcoastofhongkongisland":
          return "North Coast of hongkong island";
          break;
        case "pokfulam":
          return "POKFULAM";
          break;
        case "outlyingislands":
          return "OUTLYING ISLANDS";
          break;
        case "yuenlong":
          return "YUENLONG";
          break;
      }
    }
  }, [router.pathname, router.query.slug]);

  let title_cn = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return "概述";
          break;
        case "/archives":
          return "檔案";
          break;
        case "/exhibition":
          return "展覽";
          break;
        case "/acknowledgment":
          return "鳴謝";
          break;
        case "/six":
          return "六處地方/六位藝術家";
          break;
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return "何遠良";
          break;
        case "koonwaibong":
          return "管偉邦";
          break;
        case "lamtungpang":
          return "林東鵬";
          break;
        case "leungkayin":
          return "梁嘉賢";
          break;
        case "wongchunhei":
          return "黃進曦";
          break;
        case "wonglaiching":
          return "黃麗貞";
          break;
        case "kowloonmountainranges":
          return "九龍群山";
          break;
        case "thepeak":
          return "山頂";
          break;
        case "northcoastofhongkongisland":
          return "港島北";
          break;
        case "pokfulam":
          return "薄扶林";
          break;
        case "outlyingislands":
          return "離島";
          break;
        case "yuenlong":
          return "元朗";
          break;
      }
    }
  }, [router.pathname, router.query.slug]);

  return (
    <div
      className={cn(
        "flex items-center justify-center fixed left-0 bottom-0 px-2 pt-1 pb-1 bg-white ",
        { ["hidden"]: router.pathname === "/" }
      )}
    >
      <p className="text-xl text-main-color uppercase">
        {router.locale === "en" ? title : title_cn}
      </p>
    </div>
  );
};

export default memo(CurrentLabel);
