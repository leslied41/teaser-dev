type InfoItem = {
  title: string;
  intro: string;
  specification?: string;
  dimension: string;
  date: string;
};
export type Info = {
  en: InfoItem;
  cn: InfoItem;
};
export type Images = {
  info: Info;
  src: string[];
};
export const hoyuenleung_list = [
  { floorPlan: "/hoyuenleung/floorplan.png" },
  { map: "/hoyuenleung/map.png" },
  {
    images: {
      info: {
        en: {
          title: "ALL BEINGS OF SPROUTS",
          intro: "Recycled wood",
          specification: "A set of 12 works",
          dimension: "Dimension variable",
          date: "2022",
        },
        cn: {
          title: "《 植物相 》",
          intro: " 回收木",
          specification: "一組十二件作品",
          dimension: "尺寸不定",
          date: "2022",
        },
      },
      src: [
        "/hoyuenleung/images/1.jpg",
        "/hoyuenleung/images/2.jpg",
        "/hoyuenleung/images/3.jpg",
        "/hoyuenleung/images/4.jpg",
        "/hoyuenleung/images/5.jpg",
        "/hoyuenleung/images/6.jpg",
        "/hoyuenleung/images/7.jpg",
        "/hoyuenleung/images/8.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/hoyuenleung/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/hoyuenleung/creativeresponse.pdf",
  },
  {
    en: "AGLOW",
    cn: `《光照》`,
    title: ` Musical Interpretation`,
    title_cn: `樂韻迴響 `,
    info: "composed by Priscila Chu, in response to the exhibit SPROUTS",
    info_cn: "朱曉芳作曲回應展品，《 植物相 》",
    audio: "/hoyuenleung/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/hoyuenleung/bio.pdf",
  },
];

export const koonwaibong_list = [
  { floorPlan: "/koonwaibong/floorplan.png" },
  { map: "/koonwaibong/map.png" },
  {
    images: {
      info: {
        en: {
          title: "From Here to Timbuktu",
          intro: "Installation: ink-on-silk album leaves & lightbox",
          specification: "A set of 8 works",
          dimension: "Dimension variable",
          date: "2022",
        },
        cn: {
          title: "《 山旮旯記 》",
          intro: " 裝置：水墨絹本冊頁及燈箱",
          specification: "一組八件作品",
          dimension: "尺寸不定",
          date: "2022",
        },
      },
      src: [
        "/koonwaibong/images/1-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/2-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/3-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/4-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/5-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/6-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/7-artwork-KoonWaiBong.jpg",
        "/koonwaibong/images/8-artwork-KoonWaiBong.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/koonwaibong/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/koonwaibong/creativeresponse.pdf",
  },
  {
    en: "cumulus",
    cn: `《積雲》`,
    title: `musical interpretation`,
    title_cn: `樂韻迴響`,
    info: "composed by Priscila Chu, in response to the exhibit FROM HERE TO TIMBUKTU",
    info_cn: "朱曉芳作曲回應展品， 《 山旮旯 》",
    audio: "/koonwaibong/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/koonwaibong/bio.pdf",
  },
];

export const lamtungpang_list = [
  { floorPlan: "/lamtungpang/floorplan.png" },
  { map: "/lamtungpang/map.png" },
  {
    images: {
      info: {
        en: {
          title: "THE PRESENT IS A FOREIGN COUNTRY",
          intro:
            "Installation: single-chanel video, arcylics & charcoal painting on plywood ",
          specification: "A set of 12 works",
          dimension: "Dimension variable",
          date: "2022",
        },
        cn: {
          title: "《 當下的禮物 》",
          intro: " 裝置：單頻道錄像，塑膠彩，碳筆三合板繪畫",
          dimension: "尺寸不定",
          date: "2022",
        },
      },
      src: [
        "/lamtungpang/images/1-artwork-LamTungPang.jpg",
        "/lamtungpang/images/2-artwork-LamTungPang.jpg",
        "/lamtungpang/images/3-artwork-LamTungPang.jpg",
        "/lamtungpang/images/4-artwork-KoonWaiBong.jpg",
        "/lamtungpang/images/5-artwork-KoonWaiBong.jpg",
        "/lamtungpang/images/6-artwork-KoonWaiBong.jpg",
        "/lamtungpang/images/7-artwork-LamTungPang.jpg",
        "/lamtungpang/images/8-artwork-LamTungPang.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/lamtungpang/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/lamtungpang/creativeresponse.pdf",
  },
  {
    en: "2022",
    cn: `《2022》`,
    title: `Musical Interpretation`,
    title_cn: `樂韻迴響 `,
    info: "composed by Priscila Chu, in response to the exhibit THE PRESENT IS A FOREIGN COUNTRY",
    info_cn: "朱曉芳作曲回應展品， 《 當下的禮物 》",
    audio: "/lamtungpang/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/lamtungpang/bio.pdf",
  },
];

export const leungkayin_list = [
  { floorPlan: "/leungkayin/floorplan.png" },
  { map: "/leungkayin/map.png" },
  {
    images: {
      info: {
        en: {
          title: "OUTLINE OF THE PEAK",
          intro:
            "Gouache, Chinese ink, Japanese pigment,arcylic gouache, drawing pen & coloured pencil on Washi paper",
          dimension: "85.5 x 115cm",
          date: "2022",
        },
        cn: {
          title: "《 太平的輪廓線 》",
          intro: "水份，水墨，日本顏料，啞粉塑膠彩，繪圖筆，木顏色，和紙",
          dimension: "85.5 x 115cm",
          date: "2022",
        },
      },
      src: [
        "/leungkayin/images/1-artwork-LeungKaYin.jpg",
        "/leungkayin/images/2-artwork-LeungKaYin.jpg",
        "/leungkayin/images/3-artwork-LeungKaYin.jpg",
        "/leungkayin/images/4-artwork-LeungKaYin.jpg",
        "/leungkayin/images/5-artwork-LeungKaYin.jpg",
        "/leungkayin/images/6-artwork-LeungKaYin.jpg",
        "/leungkayin/images/7-artwork-LeungKaYin.jpg",
        "/leungkayin/images/8-artwork-LeungKaYin.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/leungkayin/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/leungkayin/creativeresponse.pdf",
  },
  {
    en: "PANDORA",
    cn: `《潘朵拉》`,
    title: `Musical Interpretation`,
    title_cn: `樂韻迴響 `,
    info: "composed by Priscila Chu, in response to the exhibit THE PEAK",
    info_cn: "朱曉芳作曲回應展品， 《 太平山 》",
    audio: "/leungkayin/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/leungkayin/bio.pdf",
  },
];

export const wongchunhei_list = [
  { floorPlan: "/wongchunhei/floorplan.png" },
  { map: "/wongchunhei/map.png" },
  {
    images: {
      info: {
        en: {
          title: "KOWLOON MOUNTAIN RANGES",
          intro: "Arcylic, digital photo printed on canvas",
          specification: "A set of three paintings",
          dimension: "68 x 120cm each",
          date: "2022",
        },
        cn: {
          title: "《 九龍群山 》",
          intro: "塑膠彩，數碼照片布本",
          specification: "一組三件繪畫作品",
          dimension: "68 x 120cm 每件",
          date: "2022",
        },
      },
      src: [
        "/wongchunhei/images/1-artwork-WongChunHei.jpg",
        "/wongchunhei/images/2-artwork-WongChunHei.jpg",
        "/wongchunhei/images/3-artwork-WongChunHei.jpg",
        "/wongchunhei/images/4-artwork-WongChunHei.jpg",
        "/wongchunhei/images/5-artwork-WongChunHei.jpg",
        "/wongchunhei/images/6-artwork-WongChunHei.jpg",
        "/wongchunhei/images/7-artwork-WongChunHei.jpg",
        "/wongchunhei/images/8-artwork-WongChunHei.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/wongchunhei/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/wongchunhei/creativeresponse.pdf",
  },
  {
    en: "GLAZE",
    cn: `《遙望》`,
    title: `Musical Interpretation`,
    title_cn: `樂韻迴響`,
    info: "composed by Priscila Chu, in response to the exhibit KOWLOON MOUNTAIN RANGES",
    info_cn: "朱曉芳作曲回應展品， 《 九龍群山 》",
    audio: "/wongchunhei/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/wongchunhei/bio.pdf",
  },
];

export const wonglaiching_list = [
  { floorPlan: "/wonglaiching/floorplan.png" },
  { map: "/wonglaiching/map.png" },
  {
    images: {
      info: {
        en: {
          title: "UNDERCURRENT",
          intro: "Japanese black stoneware clay, natural clay & metal leaf",
          specification: "Installation",
          dimension: "Dimension variable",
          date: "2022",
        },
        cn: {
          title: "《 黑水 》",
          intro: "日本高溫黑泥，天然泥土及金屬鉑",
          specification: "裝置",
          dimension: "尺寸不定",
          date: "2022",
        },
      },
      src: [
        "/wonglaiching/images/1-artwork-WongLaiChing.jpg",
        "/wonglaiching/images/2-artwork-WongLaiChing.jpg",
        "/wonglaiching/images/3-artwork-WongLaiChing.jpg",
        "/wonglaiching/images/4-artwork-WongLaiChing.jpg",
        "/wonglaiching/images/5-artwork-WongLaiChing.jpg",
      ],
    },
  },
  {
    en: `artist's note`,
    cn: "藝術家札記",
    download: "/wonglaiching/note.pdf",
  },
  {
    en: `creative response`,
    cn: "創作回應",
    download: "/wonglaiching/creativeresponse.pdf",
  },
  {
    en: "CURRENT",
    cn: `《流波》`,
    title: `Musical Interpretation`,
    title_cn: `樂韻迴響 `,
    info: "composed by Priscila Chu, in response to the exhibit UNDERCURRENT",
    info_cn: "朱曉芳作曲回應展品， 《 黑水 》",
    audio: "/wonglaiching/audio.mp3",
  },
  {
    en: "artist's bio",
    cn: "藝術家簡歷",
    download: "/wonglaiching/bio.pdf",
  },
];
