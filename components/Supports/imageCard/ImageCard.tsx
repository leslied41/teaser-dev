import React, { FC } from "react";
import cn from "clsx";

type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  images: Image[];
  className?: string;
}

const ImageCard: FC<CardProps> = ({ title, images, className }) => {
  return (
    <section>
      <h3 className="text-m-1 text-main-color uppercase">{title}</h3>
      <div className={cn("flex flex-wrap gap-[30px] mt-5", className)}>
        {images.map((i) => (
          <img src={i.src} alt={i.alt} key={i.src} />
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
