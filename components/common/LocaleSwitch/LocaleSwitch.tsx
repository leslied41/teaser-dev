import React, { FC, memo } from "react";
import { useRouter } from "next/router";
import cn from "clsx";

interface Props {
  className: string;
}

const LocaleSwitch: FC<Props> = ({ className }) => {
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
    <div className={className}>
      <button
        onClick={changeToEN}
        className="text-m text-title-color px-2 py-1"
      >
        EN
      </button>
      <button
        onClick={changeToCn}
        className="text-m text-title-color px-2 py-1"
      >
        中
      </button>
    </div>
  );
};

export default memo(LocaleSwitch);
