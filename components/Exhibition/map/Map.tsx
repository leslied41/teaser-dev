import React, { useMemo, useCallback, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { ArtistsNav } from "../../common";
import { Overlay } from "../../common";
import { data } from "../../../public/Artists/data";

const markersList = data.filter((p) => p.position !== undefined);
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = () => {
  const mapRef = useRef<google.maps.Map>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 22.3193, lng: 114.1694 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapTypeId: "hybrid",
    }),
    []
  );
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const movePosition = useCallback((postion: LatLngLiteral) => {
    mapRef.current?.panTo(postion);
  }, []);
  return (
    <div className="w-full h-full relative">
      <Overlay className="absolute" />
      <ArtistsNav
        className="absolute top-0 left-0 z-10"
        movePosition={movePosition}
      />
      <GoogleMap
        zoom={15}
        center={center}
        options={options}
        onLoad={onLoad}
        mapContainerClassName="w-full h-full"
      >
        {markersList.map((m, i) => (
          <Marker position={m.position!} key={i} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
