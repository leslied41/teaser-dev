import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import s from "../styles/Home.module.css";
import ExhibitionInfo from "../components/ExhibitionInfo";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import LocaleSwitch from "../components/LocaleSwitch";
var debounce = require("lodash.debounce");
import { data } from "../components/TitleAndSubtitle/data";

const Home: NextPage = () => {
  const [update, setUpdate] = useState(false);
  const indexRef = useRef<number>(0);
  const wheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (indexRef.current < data.length - 1) {
        indexRef.current = indexRef.current + 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === data.length - 1) {
        indexRef.current = 0;
        return setUpdate((prev) => !prev);
      }
    }
    if (e.deltaY < 0) {
      if (indexRef.current > 0) {
        indexRef.current = indexRef.current - 1;
        return setUpdate((prev) => !prev);
      }

      if (indexRef.current === 0) {
        indexRef.current = data.length - 1;
        return setUpdate((prev) => !prev);
      }
    }
  };
  useEffect(() => {
    const debounceFn = debounce(wheel, 100);
    window.addEventListener("wheel", debounceFn);
    return () => {
      window.removeEventListener("wheel", debounceFn);
    };
  }, []);
  return (
    <div className="h-screen w-full">
      <ExhibitionInfo className="fixed top-3 left-3" />
      <TitleAndSubtitle
        className="fixed bottom-0 left-0"
        obj={data[indexRef.current]}
        index={indexRef.current}
      />
      <LocaleSwitch className="fixed top-3 right-3" />
      <video
        src="/videoBg.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
};

export default Home;
