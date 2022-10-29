import React, { FC, JSXElementConstructor } from "react";
import Link from "next/link";
import cn from "clsx";

type Artist = { name: string; src: string };

interface CardProps {
  title?: string;
  subtitle?: string;
  data: string[] | Artist[];
  Heading?: string | JSXElementConstructor<any>;
  headingClassName?: string;
  bodyClassName?: string;
  link?: boolean;
}

const TextCard: FC<CardProps> = ({
  title,
  subtitle,
  data,
  Heading = "h3",
  headingClassName,
  bodyClassName,
  link = false,
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
        {data.map((e: Artist | string) =>
          link ? (
            <li
              key={
                typeof e !== "string" ? `${title}-${e.src}` : `${title}-${e}`
              }
            >
              <Link href={typeof e !== "string" ? e.src : ""}>
                <a className="hover:opacity-70">
                  {typeof e !== "string" ? e.name : ""}{" "}
                </a>
              </Link>
            </li>
          ) : (
            <li key={`${title}-${e}`}>{typeof e == "string" && e}</li>
          )
        )}
      </ul>
    </section>
  );
};

export default TextCard;
