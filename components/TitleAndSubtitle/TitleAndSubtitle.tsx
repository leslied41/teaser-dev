import React, {
  FC,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  memo,
} from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useViewportWith from "../../hooks/useViewportWidth";
var debounce = require("lodash.debounce");

interface Props {
  className?: string;
  obj: {
    title: string;
    subtitle: string;
    title_cn: string;
    subtitle_cn: string;
    src: string;
  };
  order: number;
}

const TitleAndSubtitle: FC<Props> = ({ className, obj, order }) => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const router = useRouter();
  const eWidthRef = useRef<number>();
  const divRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef(true);
  const [updateWidth, setUpdateWidth] = useState(false);
  const [updateRow, setUpdateRow] = useState(true);
  const [hideen, setHideen] = useState(true);

  const { viewportWidth } = useViewportWith();

  useIsomorphicLayoutEffect(() => {
    const eW = divRef.current?.getBoundingClientRect().width;
    eWidthRef.current = eW;
    setUpdateWidth(!updateWidth);
    const getElementWidth = () => {
      const eW = divRef.current?.getBoundingClientRect().width;
      if (rowRef.current === false) return;
      else {
        eWidthRef.current = eW;
        setUpdateWidth(!updateWidth);
      }
    };
    const debounceFn = debounce(getElementWidth, 100);
    window.addEventListener("resize", debounceFn);
    return () => {
      window.removeEventListener("resize", debounceFn);
    };
  }, [router.locale]);

  useIsomorphicLayoutEffect(() => {
    if (eWidthRef.current! < viewportWidth!) {
      rowRef.current = true;
      setUpdateRow(!updateRow);
    }
    if (viewportWidth! <= eWidthRef.current!) {
      rowRef.current = false;
      setUpdateRow(!updateRow);
    }
  }, [viewportWidth, updateWidth]);

  useEffect(() => {
    if (order === 0) {
      setHideen(false);
    } else {
      setTimeout(() => {
        setHideen(false);
      }, 500);
    }
    setTimeout(() => {
      setHideen(true);
    }, 8000);
  }, [order]);

  return (
    <>
      <div
        className={cn(
          "flex-col   uppercase flex  max-w-0 overflow-hidden transition-all duration-[3000ms]",
          className,
          {
            ["max-w-full transition-all duration-[2000ms]"]: !hideen,
            ["!flex-col !items-start"]:
              (order == 0 && router.locale !== "cn") || rowRef.current == false,
            ["!flex-row items-end"]: rowRef.current === true,
          }
        )}
      >
        <p
          className={cn(
            "p-1 text-title-color h-fit w-fit  bg-black text-lg sm:text-xl whitespace-nowrap",
            {
              ["!text-xxl-cn sm:!text-xxl"]: router.locale === "cn",
              ["!bg-white"]: order !== 0,
            }
          )}
        >
          <span
            className={cn(
              "inline-block max-w-0 transition-all duration-[1000ms] delay-[1000ms]  overflow-hidden",
              {
                ["max-w-full transition-all duration-[1000ms] !delay-[0ms]"]:
                  !hideen,
              }
            )}
          >
            {router.locale === "en" ? obj.title : obj.title_cn}
          </span>
        </p>
        <p
          className={cn(
            "p-1 text-title-color h-fit w-fit bg-black text-base sm:text-lg flex items-end whitespace-nowrap",
            {
              ["text-base sm:!text-ml"]: router.locale === "cn",
              ["!bg-white"]: order !== 0,
            }
          )}
        >
          <span
            className={cn(
              "inline-block max-w-0  overflow-hidden transition-all duration-[1000ms]",
              {
                ["max-w-full transition-all duration-[1000ms] delay-[1000ms]"]:
                  !hideen,
              }
            )}
          >
            {order !== 0 && (
              <ArrowRightAltIcon className="text-base sm:!text-lg" />
            )}
            {router.locale === "en" ? obj.subtitle : obj.subtitle_cn}
          </span>
        </p>
      </div>
      {/* copy above */}
      <div
        ref={divRef}
        className={cn(
          "flex flex-row w-fit uppercase opacity-0 invisible",
          className
        )}
      >
        <p
          className={cn(
            " text-title-color h-fit w-fit  bg-black text-lg sm:text-xl whitespace-nowrap",
            {
              ["!text-xxl-cn sm:!text-xxl"]: router.locale === "cn",
            }
          )}
        >
          <span className={cn("p-1  inline-block")}>
            {router.locale === "en" ? obj.title : obj.title_cn}
          </span>
        </p>
        <p
          className={cn(
            " text-title-color h-fit w-fit bg-black text-base sm:text-lg flex items-end whitespace-nowrap",
            {
              ["text-base sm:!text-ml"]: router.locale === "cn",
            }
          )}
        >
          <span className={cn("p-1  flex items-center justify-center")}>
            {order !== 0 && (
              <ArrowRightAltIcon className="text-base sm:!text-lg" />
            )}
            {router.locale === "en" ? obj.subtitle : obj.subtitle_cn}
          </span>
        </p>
      </div>
    </>
  );
};
export default memo(TitleAndSubtitle);
