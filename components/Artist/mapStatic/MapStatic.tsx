import React from "react";
import Image from "next/image";
import { useLocale, useImageLoading } from "../../../hooks";
import Skeleton from "@mui/material/Skeleton";

interface Props {
  className?: string;
  mapImage?: string;
}

const MapStatic = ({ className, mapImage }: Props) => {
  const isEn = useLocale();
  const { loaded, imgLoad } = useImageLoading();

  return (
    <div className="w-full h-[calc(var(--vh)*100)] relative">
      <Image
        src={mapImage ? mapImage : "/hoyuenleung/images/1.jpg"}
        layout="fill"
        className="object-cover"
        onLoad={imgLoad}
      />

      {!loaded && (
        <Skeleton
          variant="rectangular"
          className="w-full !h-full bg-[#6e6363]"
          animation="pulse"
        />
      )}

      <div className="absolute left-5 bottom-5">
        <p className="text-xl text-main-color uppercase">
          {isEn ? "the route" : "遊歷"}
        </p>
      </div>
    </div>
  );
};

export default MapStatic;
