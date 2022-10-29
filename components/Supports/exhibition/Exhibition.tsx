import React, { Fragment } from "react";
import { useLocale } from "../../../hooks";
import { TextCard, ImageCard, Research, Project } from "..";
import { supportsData } from "../../../public/pagesData/supports";

const Exhibition = () => {
  const isEn = useLocale();
  return (
    <section className="flex flex-col gap-y-10 ">
      <h2 className="uppercase text-xl text-main-color absolute top-[-9999px] left-[-9999px]">
        {isEn ? "exhibiton" : "展覽"}
      </h2>

      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.participant_artists
            : supportsData.exhibition.cn.participant_artists
        }
        title={
          isEn ? "5 participant artists [exhibition]" : `五位參展藝術家 [展覽]`
        }
      />
      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.curator
            : supportsData.exhibition.cn.curator
        }
        title={isEn ? `curator [exhibition]` : `策展人 [展覽]`}
      />
      <Research />
      <ImageCard
        firstClassname="col-span-2"
        images={[
          { src: "/images/supports/1.png", alt: "Hongkong artist center" },
        ]}
        title={
          isEn ? "one of the co-presenter [exhibition]" : "呈現機構之一 [展覽]"
        }
      />
      <ImageCard
        className="max-w-[350px]"
        firstClassname="col-span-2"
        otherClassName="col-span-1"
        images={[
          {
            src: "/images/supports/2.png",
            alt: "hkbu and academy of visual arts",
          },
          {
            src: "/images/supports/3.png",
            alt: "hkbu and academy of visual arts",
          },
          {
            src: "/images/supports/4.png",
            alt: "hkbu and academy of visual arts",
          },
        ]}
        title={isEn ? "supporters [exhibition]" : "支持機構 [展覽]"}
      />
      <ImageCard
        className="max-w-[350px]"
        firstClassname="col-span-1"
        otherClassName="col-span-1"
        images={[
          {
            src: "/images/supports/5.png",
            alt: "hkbu and academy of visual arts",
          },
          {
            src: "/images/supports/6.png",
            alt: "hkbu and academy of visual arts",
          },
          {
            src: "/images/supports/7.png",
            alt: "hkbu and academy of visual arts",
          },
          {
            src: "/images/supports/8.png",
            alt: "hkbu and academy of visual arts",
          },
        ]}
        title={isEn ? "sponsors [exhibition]" : "贊助 [展覽]"}
      />
      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.sponsors
            : supportsData.exhibition.cn.sponsors
        }
      />
      <TextCard
        title={
          isEn ? "catalogue editor [exhibition catalogue]" : "編輯 [展覽畫冊]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Editor
            : supportsData.exhibition.cn.Catalogue_Editor
        }
      />
      <TextCard
        title={
          isEn
            ? "seminar speaker [exhibition activities]"
            : "講座主講 [展覽活動]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Seminar_Speaker
            : supportsData.exhibition.cn.Seminar_Speaker
        }
      />
      <TextCard
        title={
          isEn
            ? "catalogue copy editor [exhibition catalogue]"
            : "文字編輯 [展覽畫冊]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Copy_Editor
            : supportsData.exhibition.cn.Catalogue_Copy_Editor
        }
      />
      <TextCard
        title={
          isEn
            ? "catalogue texts translation [exhibition catalogue]"
            : "文章翻譯 [展覽畫冊]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Texts_Translation
            : supportsData.exhibition.cn.Catalogue_Texts_Translation
        }
      />
      <TextCard
        title={
          isEn ? "music composing [in response to exhibits]" : "作曲 [回應展品]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Music_Composing
            : supportsData.exhibition.cn.Music_Composing
        }
      />
      <TextCard
        title={isEn ? "photography [exhibitis]" : "攝影 [展品]"}
        data={
          isEn
            ? supportsData.exhibition.en.Photography
            : supportsData.exhibition.cn.Photography
        }
      />
      <TextCard
        title={
          isEn ? "social media management [exhibition]" : "社交媒體管理 [展覽]"
        }
        data={
          isEn
            ? supportsData.exhibition.en.Social_Media_Management
            : supportsData.exhibition.cn.Social_Media_Management
        }
      />

      {/* <TextCard
        title={isEn ? "guided tour" : "導賞團策劃"}
        data={
          isEn
            ? supportsData.exhibition.en.Guided_Tour
            : supportsData.exhibition.cn.Guided_Tour
        }
      />
      <TextCard
        title={isEn ? "videography" : "錄像"}
        data={
          isEn
            ? supportsData.exhibition.en.Videography
            : supportsData.exhibition.cn.Videography
        }
      /> */}
      <Project />
    </section>
  );
};

export default Exhibition;
