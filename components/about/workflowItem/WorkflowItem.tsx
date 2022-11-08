import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import Link from "next/link";
import cn from "clsx";

interface Props {
  year: number;
  title: string;
  content?: string;
  last?: boolean;
  src?: string;
  outsideLink?: string;
  contentClassName?: string;
}

const WorkflowItem: FC<Props> = ({
  year,
  title,
  content,
  last = false,
  src,
  outsideLink,
  contentClassName,
}) => {
  const isEn = useLocale();
  return (
    <div className="flex gap-x-6 ">
      <div
        className={cn("border-r-[1px] border-main-color", {
          ["border-none"]: last,
        })}
      >
        <div className="flex items-center justify-center bg-main-color w-16 h-10 text-m-1">
          {year}
        </div>
      </div>
      <div className={"flex-1 pb-[100px]"}>
        {outsideLink ? (
          <a
            className={"hover:opacity-70"}
            href={outsideLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              className={cn("text-lg-1 text-main-color uppercase", {
                ["text-lg"]: isEn,
              })}
            >
              {title}
            </p>
            <p
              className={cn(
                "mt-4 text-m-1-cn",
                { ["text-m-1"]: isEn },
                contentClassName
              )}
            >
              {content}
            </p>
          </a>
        ) : src ? (
          <Link href={`/${src}`}>
            <a className={cn({ ["hover:opacity-70"]: src })}>
              <p
                className={cn("text-lg-1 text-main-color uppercase", {
                  ["text-lg"]: isEn,
                })}
              >
                {title}
              </p>
              <p
                className={cn(
                  "mt-4 text-m-1-cn",
                  { ["text-m-1"]: isEn },
                  contentClassName
                )}
              >
                {content}
              </p>
            </a>
          </Link>
        ) : (
          <>
            <p
              className={cn("text-lg-1 text-main-color uppercase", {
                ["text-lg"]: isEn,
              })}
            >
              {title}
            </p>
            <p
              className={cn(
                "mt-4 text-m-1-cn",
                { ["text-m-1"]: isEn },
                contentClassName
              )}
            >
              {content}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default WorkflowItem;
