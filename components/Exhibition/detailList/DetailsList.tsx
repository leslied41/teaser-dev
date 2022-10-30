import { MixedNavList } from "../../common";

const list = [
  { en: "preface", cn: "前言", download: "/exhibition/preface.pdf" },
  { en: "forward", cn: "序", download: "/exhibition/foreword.pdf" },
  {
    en: "curatorial statement",
    cn: "策展論述",
    download: "/exhibition/curatorial.pdf",
  },
  {
    en: "academic essay",
    cn: "學術文章",
    download: "/exhibition/academicessay.pdf",
  },
  { en: "6 locations/6 artists", cn: "六處地方/六位藝術家", link: "/six" },
  {
    en: "catalogue",
    cn: "畫冊",
    contact: "mailto:hereandthere102022@gmail.com",
  },
  { en: "activities", cn: "活動", download: "/exhibition/activities.pdf" },
];
Object.freeze(list);
interface ListProps {
  className: string;
}

const DetailsList = ({ className }: ListProps) => {
  return (
    <MixedNavList
      list={list}
      className={className}
      downloadClassName="text-m-1"
      linkClassName="text-xl"
      ariaLabel="exhibition details navigation"
    />
  );
};

export default DetailsList;
