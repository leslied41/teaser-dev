import React from "react";
import { NormalPageLayout } from "../components/common";
import { useLocale } from "../hooks";
import cn from "clsx";

const About = () => {
  const isEn = useLocale();
  return (
    <>
      <section aria-label="introduction">
        <p className="text-m-1">
          {isEn
            ? `HERE & THERE is a project originated from a research project titled
 ‘An Exploration of Landscape Aesthetic, Hong Kong Scenic Sites and
 Cultural Imagination’ [Project number: 12606618; Project PI: Dr Koon
 Wai Bong], which is funded by General Research Fund (GRF) of
 University Grants Committee (UGC) in 2018.`
            : `《極目足下》始於2018年，是一個由大學教育資助委員會「優配研究金」贊助的研究計劃，計劃名稱為「山水美學、香港景象與文化想像間的探索」。[計劃編號：12606618；首研究員：管偉邦博士] 

 `}
        </p>
        <p className="text-m-1 mt-10">
          {isEn
            ? "The workflow of this project is shown as follows:"
            : "計劃的工作流程為："}
        </p>
      </section>
      <section aria-label="workflow">
        <div className="mt-20">
          <div className="flex gap-x-6 ">
            <div className="border-r-[1px] border-main-color">
              <div className="flex items-center justify-center bg-main-color w-16 h-10 text-m-1">
                2018
              </div>
            </div>
            <div className="flex-1 pb-[100px]">
              <p className="text-xl text-main-color uppercase">
                {isEn ? "research" : "研究"}{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 ">
            <div className="border-r-[1px] border-main-color ">
              <div className="flex items-center justify-center bg-main-color w-16 h-10 text-m-1">
                2021
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-4 pb-[100px]">
              <p className="text-lg uppercase">{isEn ? "archives" : "檔案"} </p>
              <p className="text-xl text-main-color uppercase">
                {isEn ? "art production" : "創作"}
              </p>
              <p className="text-lg uppercase">
                {isEn ? "6 locations" : "六處地方"}
              </p>
              <p className="text-lg uppercase">
                {isEn ? "6 artists" : "六位藝術家"}
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="border-r-[1px] border-main-color">
              <div className="flex items-center justify-center bg-main-color w-16 h-10 text-m-1">
                2022
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-4">
              <p className="text-xl text-main-color uppercase">
                {isEn ? "exhibition" : "展覽"}
              </p>
              <p className="text-lg uppercase">{isEn ? "catalogue" : "畫冊"}</p>
              <p className="text-lg uppercase">
                {isEn ? "activities" : "活動"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20" aria-label="contact">
        <p className="text-m-1">
          {isEn
            ? `For further information, please feel free to contact
            hereandthere102022@gmail.com`
            : "如有查詢，請電郵至：hereandthere102022@gmail.com "}
        </p>
      </section>
      <footer className="mt-20 text-sm">
        <section
          aria-label="english version"
          className={cn("hidden", {
            ["!flex flex-col gap-y-10"]: isEn,
          })}
        >
          <div>
            <p>
              © Koon Wai Bong. All images, texts and music copyright the
              artists, the authors and the composer unless otherwise stated.
            </p>
          </div>
          <div>
            <p>
              All rights reserved. No parts of this website may be reproduced,
              or transmitted in any form or by any means, electronics,
              mechanical, including photocopy, recording or any information
              storage or retrieval system, without permission in writing from
              the copyright holder(s).
            </p>
          </div>
          <div>
            <p>
              Opinions expressed in this website are those of the artists, the
              authors and the composer, all of who shall assume sole
              responsibility, and do not necessarily represent the stance of
              Hong Kong Baptist University.
            </p>
          </div>
          <div>
            <p>
              Hong Kong Arts Development Council fully supports freedom of
              artistic expression. The views and opinions expressed in this
              project do not represent the stand of the Council.
            </p>
          </div>
        </section>
        <section
          aria-label="chinese version"
          className={cn("hidden", { ["!block"]: !isEn })}
        >
          <div>
            <p>
              ©
              管偉邦。版權所有，本網頁文章、圖片及音樂皆屬於作者版權所有，本網頁任何部份未經版權所有人許可，不得作任何形式之翻印、轉載或翻譯。
            </p>
          </div>
          <div>
            <p>
              本網頁內意見乃藝術家、作者及作曲者個人觀點，作者將文責自負，該等意見不一定代表香港浸會大學立場。
              香港藝術發展局全力支持藝術表達自由，本計劃內容並不反映本局意見。
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};
About.Layout = NormalPageLayout;
export default About;
