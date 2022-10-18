import { MixedNavList } from "../../common";

const list = [
  { en: "preface", cn: "前言", pdf: "" },
  { en: "forward", cn: "序", pdf: "" },
  { en: "curatorial statement", cn: "策展論述", pdf: "" },
  { en: "6 locations/6 artists", cn: "六處地方/六位藝術家", link: "/six" },
  { en: "catalogue", cn: "畫冊", pdf: "" },
  { en: "activities", cn: "活動", pdf: "" },
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
      pdfClassName="text-gl-1"
      linkClassName="text-xl"
      ariaLabel="exhibition details navigation"
    />
  );
};

export default DetailsList;
