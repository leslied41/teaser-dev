import React, { FC, memo } from "react";
import { useRouter } from "next/router";

interface Props {
  className?: string;
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
    <section className={className} aria-label="language switch">
      <button onClick={changeToCn} className="text-m text-main-color px-2 py-1">
        中
      </button>
      <button onClick={changeToEN} className="text-m text-main-color px-2 py-1">
        EN
      </button>
    </section>
  );
};

export default memo(LocaleSwitch);
