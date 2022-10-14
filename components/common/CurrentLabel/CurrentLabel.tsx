import React, { useMemo, memo } from "react";
import { useRouter } from "next/router";
import cn from "clsx";

const CurrentLabel = () => {
  const router = useRouter();
  let title = useMemo(() => {
    switch (router.pathname) {
      case "/about":
        return "about";
      case "/archives":
        return "archives";
      case "/exhibition":
        return "exhibition";
      case "/supports":
        return "supports";
    }
  }, [router.pathname]);

  let title_cn = useMemo(() => {
    switch (router.pathname) {
      case "/about":
        return "概述";
      case "/archives":
        return "檔案";
      case "/exhibition":
        return "展覽";
      case "/supports":
        return "鳴謝";
    }
  }, [router.pathname]);

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
