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
  index: number;
}

const TitleAndSubtitle: FC<Props> = ({ className, obj, index }) => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const router = useRouter();
  const eWidthRef = useRef<number>();
  const divRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef(true);
  const [updateWidth, setUpdateWidth] = useState(false);
  const [updateRow, setUpdateRow] = useState(true);

  const { viewportWidth } = useViewportWith();

  useIsomorphicLayoutEffect(() => {
    const eW = divRef.current?.getBoundingClientRect().width;
    eWidthRef.current = eW;
    setUpdateWidth(!updateWidth);
    const getElementWidth = () => {
      const eW = divRef.current?.getBoundingClientRect().width;
      if (rowRef.current === false) return;
      //when row-col, do not change element width, cause now the widht is smaller due to row-col.
      //and if its width get updated, this widht will be shorter than viewport widht, layout will
      //be changed to row again. so once row-col just keep this width and this widht will be the breakpoint.
      //when it get wider, it will be wider than element width, and row-col will become col.
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
  }, [index, router.locale]);

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

  return (
    <>
      <div
        className={cn("flex flex-col w-fit uppercase", className, {
          ["!flex-col"]:
            (index == 0 && router.locale !== "cn") || rowRef.current == false,
          ["!flex-row"]: rowRef.current === true,
        })}
      >
        <p
          className={cn(
            " text-title-color text-lg sm:text-xl whitespace-nowrap",
            {
              ["!text-xxl-cn sm:!text-xxl"]: router.locale === "cn",
            }
          )}
        >
          <span
            className={cn("p-1 bg-black inline-block", {
              ["!bg-white"]: index !== 0,
            })}
          >
            {router.locale === "en" ? obj.title : obj.title_cn}
          </span>
        </p>
        <p
          className={cn(
            " text-title-color text-base sm:text-lg flex items-end whitespace-nowrap",
            {
              ["text-base sm:!text-ml"]: router.locale === "cn",
            }
          )}
        >
          <span
            className={cn("p-1 bg-black  flex items-center justify-center", {
              ["!bg-white"]: index !== 0,
            })}
          >
            {index !== 0 && (
              <ArrowRightAltIcon className="text-base sm:!text-lg" />
            )}
            {router.locale === "en" ? obj.subtitle : obj.subtitle_cn}
          </span>
        </p>
      </div>
      {/* this is the copy of above that is used to update the expected width, as only the width of the div when
      flex-direction: row is needed. So in this copy, the flex-derection is fixed as flex-row.*/}
      <div
        ref={divRef}
        className={cn(
          "flex flex-row w-fit uppercase opacity-0 invisible",
          className
        )}
      >
        <p
          className={cn(
            "text-title-color text-lg sm:text-xl whitespace-nowrap",
            {
              ["!text-xxl-cn sm:!text-xxl"]: router.locale === "cn",
            }
          )}
        >
          <span
            className={cn("bg-black inline-block", {
              ["!bg-white"]: index !== 0,
            })}
          >
            {router.locale === "en" ? obj.title : obj.title_cn}
          </span>
        </p>
        <p
          className={cn(
            "text-title-color text-base sm:text-lg flex items-end whitespace-nowrap",
            {
              ["text-base sm:!text-ml"]: router.locale === "cn",
            }
          )}
        >
          <span
            className={cn("bg-black  flex items-center justify-center", {
              ["!bg-white"]: index !== 0,
            })}
          >
            {index !== 0 && (
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
