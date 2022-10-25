import React, {
  useMemo,
  useCallback,
  useRef,
  memo,
  useState,
  useEffect,
} from "react";
import { GoogleMap, MarkerF, Polyline } from "@react-google-maps/api";
import { positionList } from "../../../public/Artists/data";
import { useLocale } from "../../../hooks";
import s from "./Map.module.css";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = () => {
  const [paths, setPaths] = useState<any>([]);
  const mapRef = useRef<google.maps.Map>();
  const isEn = useLocale();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 22.26, lng: 114.1529 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      mapTypeId: "hybrid",
    }),
    []
  );
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    const group_one = [];
    for (let i = 0; i < positionList.group_one.length - 1; i++) {
      let path;
      if (positionList.group_one[i].middlePoint)
        path = [
          positionList.group_one[i].position,
          positionList.group_one[i].middlePoint,
          positionList.group_one[i + 1].position,
        ];
      else
        path = [
          positionList.group_one[i].position,
          positionList.group_one[i + 1].position,
        ];
      group_one.push(path);
    }
    const group_two = [];
    for (let i = 0; i < positionList.group_two.length - 1; i++) {
      const path = [
        positionList.group_two[i].position,
        positionList.group_two[i + 1].position,
      ];
      group_two.push(path);
    }
    const connectionLeft = [
      positionList.startting[0].position,
      positionList.group_one[0].position,
    ];
    const connectionRight = [
      positionList.startting[0].position,
      positionList.startting[0].middlePointOne,
      positionList.startting[0].middlePointTwo,
      positionList.group_two[0].position,
    ];
    setPaths([...group_one, connectionLeft, ...group_two, connectionRight]);
  }, []);

  const labelGroupOnePositionSort = useCallback((i: number) => {
    let lable_origin = new google.maps.Point(0, 0);
    switch (i) {
      case 0:
        lable_origin = new google.maps.Point(-40, 10);
        break;
      case 1:
        lable_origin = new google.maps.Point(50, 10);
        break;
      case 2:
        lable_origin = new google.maps.Point(40, 35);
        break;
      case 3:
        lable_origin = new google.maps.Point(30, -15);
      default:
        break;
    }
    return lable_origin;
  }, []);

  const labelGroupTwoPositionSort = useCallback((i: number) => {
    let lable_origin = new google.maps.Point(0, 0);
    switch (i) {
      case 0:
        lable_origin = new google.maps.Point(40, -20);
        break;
      case 1:
        lable_origin = new google.maps.Point(-50, 10);
        break;
      case 2:
        lable_origin = new google.maps.Point(70, 30);
        break;
      case 3:
        lable_origin = new google.maps.Point(70, 10);
        break;
      case 4:
        lable_origin = new google.maps.Point(80, 10);
        break;
      case 5:
        lable_origin = new google.maps.Point(-30, 10);
      default:
        break;
    }
    return lable_origin;
  }, []);

  return (
    <section className="w-full h-full relative" aria-label="google map">
      <GoogleMap
        zoom={11.8}
        center={center}
        options={options}
        onLoad={onLoad}
        mapContainerClassName="w-full h-full"
      >
        {paths.map((p: any, i: number) => (
          <Polyline
            path={p}
            key={`position-${i}`}
            options={
              [0, 1, 2, 3].includes(i)
                ? { strokeColor: "#000", strokeWeight: 4 }
                : { strokeColor: "#C9AE86", strokeWeight: 4 }
            }
          />
        ))}

        {positionList.startting.map((m) => {
          return (
            <MarkerF
              position={m.position}
              key={m.name}
              icon={{
                url: "/images/routes/Route1.png",
                labelOrigin: new google.maps.Point(40, -15),
                anchor: new google.maps.Point(10, 10),
              }}
              label={{
                text: `${m.name}`,
                color: "#fff",
                className: s.label_2,
              }}
            />
          );
        })}
        {positionList.group_one.map((m, i: number) => {
          return (
            <MarkerF
              position={m.position}
              key={m.name}
              icon={{
                url: "/images/routes/Route1.png",
                labelOrigin: labelGroupOnePositionSort(i),
                anchor: new google.maps.Point(10, 10),
              }}
              label={{
                text: `${m.name}`,
                color: "#fff",
                className: s.label_1,
              }}
            />
          );
        })}
        {positionList.group_two.map((m, i) => {
          return (
            <MarkerF
              position={m.position}
              key={m.name}
              icon={{
                url: "/images/routes/Route1.png",
                labelOrigin: labelGroupTwoPositionSort(i),
                anchor: new google.maps.Point(10, 10),
              }}
              label={{
                text: `${m.name}`,
                color: "#000",
                className: s.label_2,
              }}
            />
          );
        })}
      </GoogleMap>
      {/* <Overlay className="absolute pointer-events-none" /> */}
      <div className="absolute left-5 bottom-5">
        <p className="text-xl text-main-color uppercase">
          {isEn ? "the route" : "遊歷"}
        </p>
      </div>
    </section>
  );
};

export default memo(Map);
