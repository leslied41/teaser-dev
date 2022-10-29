import React from "react";
import Image from "next/image";
import mapImage from "../../../public/images/map.png";
import { useLocale } from "../../../hooks";

interface Props {
  className?: string;
}

const MapStatic = ({ className }: Props) => {
  const isEn = useLocale();
  return (
    <div className="w-full h-screen relative">
      <Image
        src={mapImage}
        layout="fill"
        className="object-contain md:object-cover"
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
