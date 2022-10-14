import React, { FC, memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGlobalContext } from "..";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "clsx";
import s from "./MainNav.module.css";

interface MainNavProps {
  className?: string;
  embedIn: "landing" | "footer" | "navbar";
}

const navList = [
  { en: "about", cn: "關於" },
  { en: "research", cn: "研究" },
  { en: "artists", cn: "藝術家" },
  { en: "exhibition", cn: "展覽" },
];
Object.freeze(navList);

const MainNav: FC<MainNavProps> = ({ className, embedIn }) => {
  const router = useRouter();
  const { setOpenNavbar } = useGlobalContext();
  const isEn = router.locale === "en";

  const CloseNavbar = (location: string) => {
    if (
      embedIn === "navbar" &&
      setOpenNavbar &&
      router.pathname === `/${location}`
    )
      setOpenNavbar(false);
  };

  return (
    <nav
      className={className}
      aria-label={
        embedIn === "navbar"
          ? "primary"
          : embedIn === "landing"
          ? "landing"
          : "footer"
      }
    >
      <ul className="flex flex-col gap-3">
        {navList.map((l, i) => (
          <li key={i} className="uppercase text-xl text-main-color ">
            <Link href={`/${l.en}`}>
              <a onClick={() => CloseNavbar(l.en)}>
                <span
                  className={cn(
                    s.parentSpan,
                    "flex items-center py-[6px] px-2 w-fit",
                    {
                      ["hover:bg-white"]: embedIn === "landing" || "navbar",
                    }
                  )}
                >
                  {(embedIn === "landing" || "navbar") && (
                    <span className="hidden">
                      <ArrowRightAltIcon fontSize="large" />
                    </span>
                  )}
                  <span className="cursor-pointer flex items-center ">
                    {isEn ? l.en : l.cn}
                  </span>
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MainNav);
