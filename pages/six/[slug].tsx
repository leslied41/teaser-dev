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

  const data = useMemo(() => {
    if (!router.query.slug)
      return {
        seo_title: { cn: "何遠良/元朗", en: "Ho Yuenleung/Yuenlong" },
        list: hoyuenleung_list,
        map_image: hoyuenleung_map,
      };
    if (
      ["hoyuenleung", "yuenlong"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: { cn: "何遠良/元朗", en: "Ho Yuenleung/Yuenlong" },
        list: hoyuenleung_list,
        map_image: hoyuenleung_map,
      };
    }
    if (
      ["koonwaibong", "outlyingislands"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: { cn: "管偉邦/港島北", en: "Koon Waibong/Outlying islands" },
        list: koonwaibong_list,
        map_image: koonwaibong_map,
      };
    }
    if (
      ["leungkayin", "thepeak"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: { cn: "梁嘉賢/山頂", en: "Leung Kayin/The peak" },
        list: leungkayin_list,
        map_image: leungkayin_map,
      };
    }
    if (
      ["lamtungpang", "northcoastofhongkongisland"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: {
          cn: "林東鵬/港島北",
          en: "Lam Tungpang/North Coast of HongKong island",
        },
        list: lamtungpang_list,
        map_image: lamtungpang_map,
      };
    }
    if (
      ["wongchunhei", "kowloonmountainranges"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: {
          cn: "黃進曦/九龍群山",
          en: "Wong Chunhei/Kowloon Mountain Ranges",
        },
        list: wongchunhei_list,
        map_image: wongchunhei_map,
      };
    }
    if (
      ["wonglaiching", "pokfulam"].includes(
        (router.query.slug as string).toLowerCase()
      )
    ) {
      return {
        seo_title: { cn: "黃麗貞/薄扶林", en: "Wong Laiching/Pokfulam" },
        list: wonglaiching_list,
        map_image: wonglaiching_map,
      };
    }
  }, [router.query.slug]);

  return (
    <>
      <SEO title={isEn ? data?.seo_title?.en : data?.seo_title?.cn} />
      <div className="bg-[#EEEEEE] relative">
        <MapStatic mapImage={data?.map_image!} />
        <Hero
          setShowArtWork={setShowArtWork}
          imageSrc={data?.list ? data?.list[2]?.images?.src[0] : ""}
        />
        <NavList list={data?.list} />
        <VenueGraph
          className="mt-[250px] pb-[100px]"
          icon={data?.list ? data?.list[0]?.floorPlan : undefined}
        />
        {showArtWork && (
          <Gallery
            showArtWork={showArtWork}
            setShowArtWork={setShowArtWork}
            images={data?.list ? data?.list[2]?.images : undefined}
          />
        )}
      </div>
    </>
  );
};

Artist.Layout = GlobalLayout;
export default Artist;
