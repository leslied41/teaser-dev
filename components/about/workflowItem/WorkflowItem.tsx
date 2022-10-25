import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import cn from "clsx";

interface Props {
  year: number;
  title: string;
  content?: string;
  last?: boolean;
}

const WorkflowItem: FC<Props> = ({ year, title, content, last = false }) => {
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
        <p className="text-xl text-main-color uppercase">{title}</p>
        <p className="text-m-1 mt-4">{content}</p>
      </div>
    </div>
  );
};
export default WorkflowItem;
