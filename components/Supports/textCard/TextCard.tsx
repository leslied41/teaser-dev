import React, { FC } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  data: string[];
}

const TextCard: FC<CardProps> = ({ title, subtitle, data }) => {
  return (
    <section>
      {title && <h3 className="text-m-1 text-main-color uppercase">{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
      <ul>
        {data.map((e) => (
          <li key={`${title}-${e}`}>{e}</li>
        ))}
      </ul>
    </section>
  );
};

export default TextCard;
