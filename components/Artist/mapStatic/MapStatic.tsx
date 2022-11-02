import React from "react";
import { useLocale, useImageLoading } from "../../../hooks";
import Skeleton from "@mui/material/Skeleton";
import Image, { StaticImageData } from "next/image";

interface Props {
  className?: string;
  mapImage: StaticImageData;
}

const MapStatic = ({ className, mapImage }: Props) => {
  const isEn = useLocale();
  const { loaded, imgLoad } = useImageLoading();

  return (
    <div className="w-full h-fit relative tracking-normal text-[0]">
      <Image
        src={mapImage}
        className="object-cover min-w-full"
        onLoad={imgLoad}
      />

      {!loaded && (
        <Skeleton
          variant="rectangular"
          className="w-full !h-full"
          animation="wave"
        />
      )}

      <div className="absolute left-5 bottom-5">
        <p className="text-xl text-main-color uppercase">
          {isEn ? "the spots" : "遊歷"}
        </p>
      </div>
    </div>
  );
};

export default MapStatic;
