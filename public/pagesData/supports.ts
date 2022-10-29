type Item = {
  en: { [key: string]: string[] };
  cn: { [key: string]: string[] };
};
type Introducrtion = {
  [key: string]: string;
};
interface SupportsData {
  introduction: Introducrtion;
  research: Item;
  exhibition: Item;
  project: Item;
}

export const supportsData: SupportsData = {
  introduction: {
    cn: "計劃首研究員十分感謝以下人士 —— 沒有他們的支持，本計劃不能成功。",
    en: "This project cannot be made without the generous supports of the followings parties. The Project PI would like to say a big thank you to them. ",
  },
  research: {
    en: {
      "research team [research]": [
        "Ting Wing Yan, Vivian",
        "Chan Pui, Pedith ",
      ],
      "Research Archive Development [research]": ["Ting Wing Yan, Vivian"],
      "sponsor [research]": ["Research Grants Council "],
    },
    cn: {
      "研究團隊 [研究]": ["丁穎茵", "陳蓓"],
      "研究檔案 [研究]": ["丁穎茵"],
      "贊助 [研究]": ["研究資助局"],
    },
  },
  exhibition: {
    en: {
      participant_artists: [
        "Ho Yuen Leung",
        "Lam Tung Pang",
        "Leung Ka Yin, Joey",
        "Wong Chun Hei, Stephen",
        "Wong Lai Ching, Fiona",
      ],
      curator: ["Ting Wing Yan, Vivian"],
      sponsors: [
        "Val Chow",
        "Mike S K Lui",
        "Nancy Maria Lee Chang",
        "Maggie Fung",
        "Anthony Choy",
        "Elaine Kwok",
        "Arthur De Villepin",
      ],
      Catalogue_Editor: ["Ting Wing Yan, Vivian"],
      Catalogue_Copy_Editor: ["Yeung Chui Yee"],
      Catalogue_Texts_Translation: [
        "Mary King Bradley",
        "Chan Lai Kuen",
        "Ernest Ip",
        "Lau Wai Kuen, Caddie",
        "Yin Siu Sung",
      ],
      Music_Composing: ["Priscila Chu"],
      Photography: ["Lam Chi Ying, Eddie @ Image Art Studio"],
      Social_Media_Management: [
        "Yu Kin Hung & Chan Yat Ning @ CUMT, CUHK",
        "Ivy Leung @ Mediators Rock",
      ],

      Seminar_Speaker: ["Yuen Chi"],
      Guided_Tour: ["HO HO GO Experience"],
      Videography: ["Moon Cheung"],
    },
    cn: {
      participant_artists: ["何遠良", "林東鵬", "梁嘉賢", "黃進曦", "黃麗貞"],
      curator: ["丁穎茵"],
      sponsors: [
        "周翩洋大律師",
        "呂世杰大律師",
        "利張錫齡",
        "Maggie Fung",
        "Anthony Choy",
        "Elaine Kwok",
        "Arthur De Villepin",
      ],
      Catalogue_Editor: ["丁穎茵"],
      Catalogue_Copy_Editor: ["楊翠怡"],
      Catalogue_Texts_Translation: [
        "Mary King Bradley",
        "陳麗娟",
        "葉梓誦",
        "劉偉娟",
        "言肇生",
      ],

      Music_Composing: ["朱曉芳"],
      Photography: ["林子英 @ Image Art Studio "],

      Social_Media_Management: [
        "余健雄 & 陳一寧 @ CUMT, CUHK",
        "梁詠珊 @ 山下策展",
      ],

      Seminar_Speaker: ["阮志"],
      Guided_Tour: ["好好過～生活導賞"],
      Videography: ["張景亮"],
    },
  },

  project: {
    en: {
      "Legal Consultant [project]": ["Val Chow"],
      "Project Coordinator [project]": ["Shum Kwan Yi, Sim"],
      "Guided_Tour [exhibition activities]": ["HO HO GO Experience"],
      "Design Production [project & exhibition]": ["Studio MARY"],
      "Website Development [project]": ["Funkie Loopie"],
      "Videography [exhibition]": ["Moon Cheung"],
    },
    cn: {
      "法律顧問 [計劃]": ["周翩洋大律師"],
      "項目統籌 [計劃]": ["沈君怡"],
      "導賞團策劃 [展覽活動]": ["好好過～生活導賞"],
      "設計 & 製作 [計劃及展覽]": ["Studio MARY"],
      "網頁設計 [計劃]": ["Funkie Loopie"],
      "錄像 [展覽]": ["張景亮"],
    },
  },
};
