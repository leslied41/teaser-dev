import React, { FC, JSXElementConstructor } from "react";
import cn from "clsx";

interface CardProps {
  title?: string;
  subtitle?: string;
  data: string[];
  Heading?: string | JSXElementConstructor<any>;
  headingClassName?: string;
  bodyClassName?: string;
}

const TextCard: FC<CardProps> = ({
  title,
  subtitle,
  data,
  Heading = "h3",
  headingClassName,
  bodyClassName,
}) => {
  return (
    <section>
      {title && (
        <Heading
          className={cn("text-m-1 text-main-color uppercase", headingClassName)}
        >
          {title}
        </Heading>
      )}
      {subtitle && <p>{subtitle}</p>}
      <ul className={bodyClassName}>
        {data.map((e) => (
          <li key={`${title}-${e}`}>{e}</li>
        ))}
      </ul>
    </section>
  );
};

export default TextCard;
