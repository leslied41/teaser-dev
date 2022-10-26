import React, { FC, memo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "..";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "clsx";
import s from "./MainNav.module.css";

interface MainNavProps {
  className?: string;
  embedIn?: "landing" | "navbar";
}

const navList = [
  { en: "home", cn: "主頁" },
  { en: "about", cn: "關於" },
  { en: "archives", cn: "檔案" },
  { en: "exhibition", cn: "展覽" },
  { en: "acknowledgment ", cn: "鳴謝" },
];
Object.freeze(navList);

const MainNav: FC<MainNavProps> = ({ className, embedIn }) => {
  const { setOpenNavbar, setLoading } = useGlobalContext();
  const router = useRouter();
  const isEn = router.locale === "en";

  useEffect(() => {
    setOpenNavbar!(false);
    setLoading!(false);
  }, [router.pathname]);

  const CloseNavbar = (location: string) => {
    if (embedIn === "navbar" && setOpenNavbar && location === router.pathname)
      setOpenNavbar(false);
    else if (embedIn === "navbar") setLoading!(true);
  };

  return (
    <nav
      className={className}
      aria-label={embedIn === "navbar" ? "primary" : "landing"}
    >
      <ul className="flex flex-col gap-3">
        {navList.map((l, i) => (
          <li
            key={i}
            className={cn("uppercase text-lg text-main-color", {
              ["!text-xl"]: [2, 3].includes(i),
            })}
          >
            <Link href={`/${l.en === "home" ? "" : l.en}`}>
              <a
                onClick={() => CloseNavbar(`/${l.en === "home" ? "" : l.en}`)}
                className="inline-block"
              >
                <div
                  className={cn(
                    s.parentSpan,
                    "flex items-center py-[6px] px-2 w-fit h-fit",
                    {
                      ["hover:bg-white"]: embedIn === "landing" || "navbar",
                    }
                  )}
                >
                  {/* <span className="hidden">
                    <ArrowRightAltIcon fontSize="medium" />
                  </span> */}

                  <span className="cursor-pointer flex items-center ">
                    {isEn ? l.en : l.cn}
                  </span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MainNav);
