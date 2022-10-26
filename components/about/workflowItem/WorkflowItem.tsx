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
}

const WorkflowItem: FC<Props> = ({
  year,
  title,
  content,
  last = false,
  src,
  outsideLink,
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
            <p className="text-xl text-main-color uppercase">{title}</p>
            <p className="text-m-1 mt-4">{content}</p>
          </a>
        ) : src ? (
          <Link href={`/${src}`}>
            <a className={cn({ ["hover:opacity-70"]: src })}>
              <p className="text-xl text-main-color uppercase">{title}</p>
              <p className="text-m-1 mt-4">{content}</p>
            </a>
          </Link>
        ) : (
          <>
            <p className="text-xl text-main-color uppercase">{title}</p>
            <p className="text-m-1 mt-4">{content}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default WorkflowItem;
