import React, { Fragment } from "react";
import { useLocale } from "../../../hooks";
import { TextCard, ImageCard } from "..";
import { supportsData } from "../../../public/pagesData/supports";

const Exhibition = () => {
  const isEn = useLocale();
  return (
    <section className="flex flex-col gap-y-10">
      <h2 className="uppercase text-xl text-main-color">
        {isEn ? "exhibiton" : "展覽"}
      </h2>

      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.participant_artists
            : supportsData.exhibition.cn.participant_artists
        }
        title={isEn ? "participant artists" : "參展藝術家"}
      />
      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.participant_artists
            : supportsData.exhibition.cn.participant_artists
        }
        title={isEn ? "curator" : "策展人"}
      />
      <ImageCard
        images={[
          { src: "/images/supports/1.png", alt: "Hongkong artist center" },
        ]}
        title={isEn ? "one of the co-presenter" : "呈現機構之一"}
      />
      <ImageCard
        className="max-w-[450px]"
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
        title={isEn ? "supporters" : "支持機構"}
      />
      <ImageCard
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
        title={isEn ? "sponsors" : "贊助"}
      />
      <TextCard
        data={
          isEn
            ? supportsData.exhibition.en.sponsors
            : supportsData.exhibition.cn.sponsors
        }
      />
      <TextCard
        title={isEn ? "catalogue editor" : "畫冊編輯"}
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Editor
            : supportsData.exhibition.cn.Catalogue_Editor
        }
      />
      <TextCard
        title={isEn ? "catalogue copy editor" : "畫冊文字編輯"}
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Copy_Editor
            : supportsData.exhibition.cn.Catalogue_Copy_Editor
        }
      />
      <TextCard
        title={isEn ? "catalogue texts translation" : "畫冊文章翻译"}
        data={
          isEn
            ? supportsData.exhibition.en.Catalogue_Texts_Translation
            : supportsData.exhibition.cn.Catalogue_Texts_Translation
        }
      />
      <TextCard
        title={isEn ? "music composing" : "作曲"}
        subtitle={isEn ? "in response to exhibits" : "回應展品"}
        data={
          isEn
            ? supportsData.exhibition.en.Music_Composing
            : supportsData.exhibition.cn.Music_Composing
        }
      />
      <TextCard
        title={isEn ? "photography" : "攝影"}
        data={
          isEn
            ? supportsData.exhibition.en.Photography
            : supportsData.exhibition.cn.Photography
        }
      />
      <TextCard
        title={isEn ? "social media management" : "社交媒體管理"}
        data={
          isEn
            ? supportsData.exhibition.en.Social_Media_Management
            : supportsData.exhibition.cn.Social_Media_Management
        }
      />
      <TextCard
        title={isEn ? "seminar speaker" : "講座主講"}
        data={
          isEn
            ? supportsData.exhibition.en.Seminar_Speaker
            : supportsData.exhibition.cn.Seminar_Speaker
        }
      />
      <TextCard
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
      />
    </section>
  );
};

export default Exhibition;
