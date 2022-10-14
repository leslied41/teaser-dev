import React, { FC } from "react";
import { useLocale } from "../../../hooks";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { data } from "../../../public/Artists/data";
import cn from "clsx";
import s from "./ArtistsNav.module.css";

type LatLngLiteral = google.maps.LatLngLiteral;

interface Props {
  className?: string;
  movePosition: (position: LatLngLiteral) => void;
}

const artistsList = data.filter((p) => p.title !== "here and there");

const ArtistsNav: FC<Props> = ({ className, movePosition }) => {
  const isEn = useLocale();
  return (
    <div className={className}>
      <ul>
        {artistsList.map((p) => (
          <li
            className={cn(
              s.liParent,
              "flex items-center text-lg text-main-color pl-2 py-1 uppercase cursor-pointer w-fit hover:bg-white"
            )}
            key={p.title}
            onClick={() => movePosition(p.position!)}
          >
            <span className="hidden">
              <ArrowRightAltIcon fontSize="large" />
            </span>
            <span className="flex items-center">
              {isEn ? p.title : p.title_cn}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistsNav;
