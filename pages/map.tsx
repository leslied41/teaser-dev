import React, { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { LoadScriptProps } from "@react-google-maps/api/dist/index";
import { Map } from "../components/Exhibition";
import { SEO } from "../components/common";

const libraries: LoadScriptProps["libraries"] = ["places"];

const Works = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <SEO title="map" />
      <div className="h-screen w-full">
        <Map />
      </div>
    </>
  );
};

export default Works;
