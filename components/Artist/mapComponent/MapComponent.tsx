import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { LoadScriptProps } from "@react-google-maps/api/dist/index";
import { Map, Route } from "..";
import { ProgressLoader } from "../../common";
import cn from "clsx";

interface Props {
  className?: string;
}
const libraries: LoadScriptProps["libraries"] = ["places"];

const MapComponent = ({ className }: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });

  if (!isLoaded)
    return (
      <div className={cn("h-[660px] w-full relative bg-black", className)}>
        <ProgressLoader className="!absolute" />
      </div>
    );
  else
    return (
      <>
        <div className={cn("h-[660px] w-full", className)}>
          <Map />
        </div>
        {/* <Route /> */}
      </>
    );
};

export default MapComponent;
