import React, { useState, useMemo } from "react";
import { GlobalLayout } from "../../components/common";
import {
  Hero,
  MapStatic,
  NavList,
  VenueGraph,
  Gallery,
} from "../../components/Artist/";
import { useDisableScroll } from "../../hooks";
import { useRouter } from "next/router";
import {
  hoyuenleung_list,
  koonwaibong_list,
  lamtungpang_list,
  leungkayin_list,
  wongchunhei_list,
  wonglaiching_list,
} from "../../public/six/data";

const Artist = () => {
  const [showArtWork, setShowArtWork] = useState(false);
  const router = useRouter();
  useDisableScroll(showArtWork);

  let list = useMemo(() => {
    if (!router.query.slug) return [];
    if (
      ["hoyuenleung", "yuenlong"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return hoyuenleung_list;
    }
    if (
      ["koonwaibong", "outlyingislands"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return koonwaibong_list;
    }
    if (
      ["leungkayin", "thepeak".toLowerCase()].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return leungkayin_list;
    }
    if (
      ["lamtungpang", "NorthCoastofHongKongisland".toLowerCase()].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return lamtungpang_list;
    }
    if (
      ["wongchunhei", "kowloonmountainranges"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return wongchunhei_list;
    }
    if (
      ["wonglaiching", "pokfulam"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return wonglaiching_list;
    }
  }, [router.query.slug]);

  return (
    <div className="bg-[#EEEEEE] relative">
      <MapStatic mapImage={list ? list[1]?.map : ""} />
      <Hero
        setShowArtWork={setShowArtWork}
        imageSrc={list ? list[2]?.images?.src[0] : ""}
      />
      {/* <MapComponent /> */}
      <NavList list={list} />
      {/* <Profile className="mt-20" /> */}
      <VenueGraph
        className="mt-[250px] pb-[100px]"
        icon={list ? list[0]?.floorPlan : undefined}
      />
      {showArtWork && (
        <Gallery
          showArtWork={showArtWork}
          setShowArtWork={setShowArtWork}
          images={list ? list[2]?.images : undefined}
        />
      )}
    </div>
  );
};

Artist.Layout = GlobalLayout;
export default Artist;
