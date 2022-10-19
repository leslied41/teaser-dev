import React, { memo } from "react";
import { useLocale } from "../../../hooks";
import { OrderIcon } from "../../icons";
import cn from "clsx";
import s from "./Route.module.css";

interface Props {}

const Route = (props: Props) => {
  const isEn = useLocale();
  return (
    <section className="h-[532px] flex justify-center items-center">
      <div className="max-w-[600px]">
        <h2 className="text-xl text-main-color uppercase">
          {isEn ? "the route" : "遊歷"}
        </h2>
        <div className="flex gap-x-[140px] mt-8">
          <ul className={cn("flex flex-col", s.listContainer)}>
            {new Array(6).fill("location name").map((e, i) => (
              <li
                key={`one-${i}`}
                className="text-m text-main-color uppercase flex gap-x-4 "
              >
                <div
                  className={cn(
                    "border-r-[1px] border-main-color pb-8",
                    s.icon
                  )}
                >
                  <OrderIcon />
                </div>

                <span>{e}</span>
              </li>
            ))}
          </ul>
          <ul className={cn("flex flex-col", s.listContainer)}>
            {new Array(6).fill("location name").map((e, i) => (
              <li
                key={`two-${i}`}
                className="text-m text-main-color uppercase flex gap-x-4 "
              >
                <div className={cn("border-r-[1px] border-black pb-8", s.icon)}>
                  <OrderIcon fill="#000" />
                </div>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(Route);
