import React from "react";
import { useLocale } from "../../../hooks";
import cn from "clsx";

interface VenueGraphProps {
  className: string;
  icon?: string;
}

const VenueGraph = ({ className, icon }: VenueGraphProps) => {
  const isEn = useLocale();
  return (
    <div className={cn("flex justify-center", className)}>
      <section className="flex flex-col gap-y-10 w-[600px]">
        <h2 className="text-xl text-main-color uppercase self-start">
          {isEn ? "exhibition venue" : "展場"}
        </h2>
        <img
          src="/hoyuenleung/map.png"
          alt="venue graph"
          className="self-center max-w-[286px] max-h-[640px]"
        />
      </section>
    </div>
  );
};

export default VenueGraph;
