import React, { FC } from "react";
import { useRouter } from "next/router";
import cn from "clsx";
interface Props {
  className: string;
}
const LocaleSwitch: FC<Props> = ({ className }) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const changeLan = (locale: string) => {
    if (locale === "cn")
      router.push({ pathname, query }, asPath, { locale: "en" });
    if (locale === "en")
      router.push({ pathname, query }, asPath, { locale: "cn" });
  };

  const handleClick = () => {
    changeLan(locale!);
  };
  return (
    <div className={cn("text-white mix-blend-exclusion z-50", className)}>
      <button onClick={handleClick}>EN/CN</button>
    </div>
  );
};

export default LocaleSwitch;
