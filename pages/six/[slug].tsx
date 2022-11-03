import React, { useState, useMemo } from "react";
import { GlobalLayout, SEO } from "../../components/common";
import {
  Hero,
  MapStatic,
  NavList,
  VenueGraph,
  Gallery,
} from "../../components/Artist/";
import { useDisableScroll, useLocale } from "../../hooks";
import { useRouter } from "next/router";
import {
  hoyuenleung_list,
  koonwaibong_list,
  lamtungpang_list,
  leungkayin_list,
  wongchunhei_list,
  wonglaiching_list,
} from "../../public/six/data";
import hoyuenleung_map from "../../public/hoyuenleung/map.png";
import koonwaibong_map from "../../public/koonwaibong/map.png";
import leungkayin_map from "../../public/leungkayin/map.png";
import lamtungpang_map from "../../public/lamtungpang/map.png";
import wongchunhei_map from "../../public/wongchunhei/map.png";
import wonglaiching_map from "../../public/wonglaiching/map.png";

const Artist = () => {
  const [showArtWork, setShowArtWork] = useState(false);
  const router = useRouter();
  useDisableScroll(showArtWork);
  const isEn = useLocale();

  let seo_title = useMemo(() => {
    if (!router.query.slug) return { cn: "", en: "" };
    if (
      ["hoyuenleung", "yuenlong"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return { cn: "何遠良/元朗", en: "Ho Yuenleung/Yuenlong" };
    }
    if (
      ["koonwaibong", "outlyingislands"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return { cn: "管偉邦/港島北", en: "Koon Waibong/Outlying islands" };
    }
    if (
      ["leungkayin", "thepeak"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return { cn: "梁嘉賢/山頂", en: "Leung Kayin/The peak" };
    }
    if (
      ["lamtungpang", "NorthCoastofHongKongisland"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        cn: "林東鵬/港島北",
        en: "Lam Tungpang/North Coast of HongKong island",
      };
    }
    if (
      ["wongchunhei", "kowloonmountainranges"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        cn: "黃進曦/九龍群山",
        en: "Wong Chunhei/Kowloon Mountain Ranges",
      };
    }
    if (
      ["wonglaiching", "pokfulam"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        cn: "黃麗貞/薄扶林",
        en: "Wong Laiching/Pokfulam",
      };
    }
  }, [router.query.slug]);

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
      ["leungkayin", "thepeak"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return leungkayin_list;
    }
    if (
      ["lamtungpang", "northcoastofhongkongisland"].includes(
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

  let map_image = useMemo(() => {
    if (!router.query.slug) return hoyuenleung_map;
    if (
      ["hoyuenleung", "yuenlong"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return hoyuenleung_map;
    }
    if (
      ["koonwaibong", "outlyingislands"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return koonwaibong_map;
    }
    if (
      ["leungkayin", "thepeak"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return leungkayin_map;
    }
    if (
      ["lamtungpang", "northcoastofhongkongisland"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return lamtungpang_map;
    }
    if (
      ["wongchunhei", "kowloonmountainranges"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return wongchunhei_map;
    }
    if (
      ["wonglaiching", "pokfulam"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return wonglaiching_map;
    }
  }, [router.query.slug]);

  return (
    <>
      <SEO title={isEn ? seo_title?.en : seo_title?.cn} />
      <div className="bg-[#EEEEEE] relative">
        <MapStatic mapImage={map_image!} />
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
    </>
  );
};

Artist.Layout = GlobalLayout;
export default Artist;
