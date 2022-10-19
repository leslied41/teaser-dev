import React, { memo } from "react";
import { useLocale } from "../../../hooks";
import cn from "clsx";

const data = {
  cn: "管偉邦現為香港浸會大學視覺藝術院副教授，於香港中 文大學取得學士(1996)及藝術碩士(2002)和澳洲皇 家墨爾本理工大學獲得藝術博士學位(2012)。其作品探 索山水及水墨美學，嘗試將歷史、現代人對地景的觀看 和感知融入水墨藝術。曾參加地景相關的藝術項目包括《 圖繪香港 》( 香港，2017)、《 島嶼·他方 —— 台港水墨 的 地 景 建 構 》( 台 北 ， 2019 )、《 港 水 韓 山 》( 香 港 ， 2019 )。 參與的展覽包括《TRANSpose》( 英國，2013)、《 清風徐 來 》( 台北，2017)及《 似重若輕 》( 香港，2017)。",
  en: "Koon Wai Bong is an associate professor at the Academy of Visual Artsof the Hong Kong Baptist University. He received his BA (1996) and MFA (2002) from the Chinese University of Hong Kong and his DFA from the RMIT University (2012). His works focus on landscape and the aesthetic of ink painting, which have incorporated history, modern viewing experience and landscape perceptions in ink art. He has participated in landscape- based projects including Picturing Hong Kong (HK, 2017), The Islands and Other Places- The Geographical Structures of Ink Paintings in Taiwan and Hong Kong (Taipei, 2019) and Hong Kong Waters and Korean Mountains (HK, 2019). His works have been exhibited in TRANSpose (UK, 2013),In the Breeze (Taipei, 2017), and The Weight of Lightless (HK, 2017).",
};
interface ProfileProps {
  className: string;
}

const Profile = ({ className }: ProfileProps) => {
  const isEn = useLocale();
  return (
    <div className={cn("flex justify-center", className)}>
      <section
        aria-label="artist profile and bio"
        className="w-[600px] py-10 flex justify-between items-start border-y-[1px] border-main-color"
      >
        <img
          src="/tempo/temp_profile.png"
          alt="artist profile"
          className="object-contain shrink-0"
        />
        <div className="max-w-[360px]">
          <p className="text-third-color text-sm ">
            {isEn ? data.en : data.cn}
          </p>
        </div>
      </section>
    </div>
  );
};

export default memo(Profile);
