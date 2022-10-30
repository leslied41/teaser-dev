import React, { useMemo } from "react";
import Image from "next/image";
import { useLocale } from "../../../hooks";

interface Props {
  className?: string;
  mapImage?: string;
}

const MapStatic = ({ className, mapImage }: Props) => {
  const isEn = useLocale();

  return (
    <div className="w-full h-screen relative">
      <Image
        src={mapImage ? mapImage : "/hoyuenleung/images/1.jpg"}
        layout="fill"
        className="object-cover"
      />
      <div className="absolute left-5 bottom-5">
        <p className="text-xl text-main-color uppercase">
          {isEn ? "the route" : "遊歷"}
        </p>
      </div>
    </div>
  );
};

export default MapStatic;
