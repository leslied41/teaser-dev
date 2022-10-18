import React from "react";
import { useLocale } from "../../../hooks";
import { VenueGraphIcon } from "../../icons";
import cn from "clsx";

interface VenueGraphProps {
  className: string;
}

const VenueGraph = ({ className }: VenueGraphProps) => {
  const isEn = useLocale();
  return (
    <div className={cn("flex justify-center", className)}>
      <section className="flex flex-col gap-y-10 w-[600px]">
        <h2 className="text-xl text-main-color uppercase self-start">
          {isEn ? "exhibition venue" : "展場"}
        </h2>
        <VenueGraphIcon className="self-center" />
      </section>
    </div>
  );
};

export default VenueGraph;
