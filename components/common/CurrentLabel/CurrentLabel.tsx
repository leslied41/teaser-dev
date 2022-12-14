import React, { useMemo, memo } from "react";
import { useRouter } from "next/router";
import { useLocale } from "../../../hooks";
import cn from "clsx";

const CurrentLabel = () => {
  const router = useRouter();
  const isEn = useLocale();

  let item = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return { title: "about us" };
          break;
        case "/archives":
          return { title: "archives" };
          break;
        case "/exhibition":
          return { title: "exhibition" };
          break;
        case "/acknowledgments":
          return { title: "acknowledgments" };
          break;
        case "/six":
          return { title: "6 locations/6 artists" };
          break;
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return { title: "ho yuen leunG", location: "yuen long" };
          break;
        case "koonwaibong":
          return { title: "koon wai bong", location: "outlying island" };
          break;
        case "lamtungpang":
          return {
            title: "lam tung pang",
            location: "North Coast of Hong Kong Island",
          };
          break;
        case "leungkayin":
          return { title: "leung ka yin", location: "the peak" };
          break;
        case "wongchunhei":
          return {
            title: "wong chun hei",
            location: "kowloon mountain ranges",
          };
          break;
        case "wonglaiching":
          return { title: "wong lai ching", location: "pok fu lam" };
          break;
        case "kowloonmountainranges":
          return {
            title: "wong chun hei",
            location: "kowloon mountain ranges",
          };
          break;
        case "thepeak":
          return { title: "leung ka yin", location: "the peak" };
          break;
        case "northcoastofhongkongisland":
          return {
            title: "lam tung pang",
            location: "North Coast of Hong Kong Island",
          };
          break;
        case "pokfulam":
          return { title: "wong lai ching", location: "POKFULAM" };

          break;
        case "outlyingislands":
          return { title: "koon wai bong", location: "OUTLYING ISLANDS" };

          break;
        case "yuenlong":
          return { title: "ho yuen leunG", location: "YUENLONG" };

          break;
      }
    }
  }, [router.pathname, router.query.slug]);

  let item_cn = useMemo(() => {
    if (!router.query.slug) {
      switch (router.pathname) {
        case "/about":
          return { title: "??????" };
          break;
        case "/archives":
          return { title: "??????" };
          break;
        case "/exhibition":
          return { title: "??????" };
          break;
        case "/acknowledgments":
          return { title: "??????" };
          break;
        case "/six":
          return { title: "????????????/???????????????" };
          break;
      }
    } else {
      switch ((router.query.slug as string).toLowerCase()) {
        case "hoyuenleung":
          return { title: "?????????", location: "??????" };
          break;
        case "koonwaibong":
          return { title: "?????????", location: "??????" };
          break;
        case "lamtungpang":
          return { title: "?????????", location: "?????????" };
          break;
        case "leungkayin":
          return { title: "?????????", location: "??????" };
          break;
        case "wongchunhei":
          return { title: "?????????", location: "????????????" };
          break;
        case "wonglaiching":
          return { title: "?????????", location: "?????????" };
          break;
        case "kowloonmountainranges":
          return { title: "?????????", location: "????????????" };
          break;
        case "thepeak":
          return { title: "?????????", location: "??????" };
          break;
        case "northcoastofhongkongisland":
          return { title: "?????????", location: "?????????" };
          break;
        case "pokfulam":
          return { title: "?????????", location: "?????????" };
          break;
        case "outlyingislands":
          return { title: "?????????", location: "??????" };
          break;
        case "yuenlong":
          return { title: "?????????", location: "??????" };
          break;
      }
    }
  }, [router.pathname, router.query.slug]);

  return (
    <>
      {router.query.slug ? (
        <div
          className={cn(
            "flex flex-row items-end justify-center fixed left-0 bottom-0",
            {
              ["hidden"]: router.pathname === "/",
              ["flex-col !items-start"]: isEn,
            }
          )}
        >
          <p className="text-lg sm:text-xl text-main-color uppercase bg-white px-2 pt-1 pb-1">
            {isEn ? item?.location : item_cn?.location}
          </p>
          <p
            className={cn(
              "text-m md:text-lg-1 text-main-color uppercase h-fit bg-white px-2 pt-1 pb-1",
              {
                ["text-lg"]: isEn,
              }
            )}
          >
            {isEn ? item?.title : item_cn?.title}
          </p>
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col items-center justify-center fixed left-0 bottom-0 px-2 pt-1 pb-1 bg-white ",
            { ["hidden"]: router.pathname === "/" }
          )}
        >
          <p className="text-lg md:text-xl text-main-color uppercase">
            {isEn ? item?.title : item_cn?.title}
          </p>
        </div>
      )}
    </>
  );
};

export default memo(CurrentLabel);
