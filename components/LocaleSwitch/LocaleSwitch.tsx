import React, { memo } from "react";
import { useRouter } from "next/router";
import cn from "clsx";

const LocaleSwitch = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeToEN = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push({ pathname, query }, asPath, { locale: "en" });
  };
  const changeToCn = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push({ pathname, query }, asPath, { locale: "cn" });
  };

  return (
    <>
      <button
        onClick={changeToEN}
        className={cn(
          "h-6 w-8 fixed top-[26px] right-2 sm:top-9 sm:right-3 border-white border-[1px]  text-m text-white mix-blend-exclusion z-50",
          {
            ["!text-title-color bg-black !border-black !mix-blend-normal"]:
              router.locale === "en",
          }
        )}
      >
        EN
      </button>
      <button
        onClick={changeToCn}
        className={cn(
          "h-6 w-8 fixed top-[58px] sm:top-[68px] right-2 sm:right-3 border-white border-[1px]  text-m text-white mix-blend-exclusion z-50",
          {
            ["!text-title-color bg-black !border-black !mix-blend-normal"]:
              router.locale === "cn",
          }
        )}
      >
        中
      </button>
    </>
  );
};

export default memo(LocaleSwitch);
