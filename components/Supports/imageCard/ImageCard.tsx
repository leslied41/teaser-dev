import React, { FC } from "react";
import cn from "clsx";
import s from "./ImageCard.module.css";

type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  images: Image[];
  className?: string;
  otherClassName?: string;
  firstClassname?: string;
}

const ImageCard: FC<CardProps> = ({
  title,
  images,
  className,
  otherClassName,
  firstClassname,
}) => {
  return (
    <section>
      <h3 className="text-m-1 text-main-color uppercase">{title}</h3>
      {images.length % 2 === 0 ? (
        <div className={cn("mt-5", className)}>
          <div className={cn("grid  gap-x-[30px]", s.columns)}>
            <div className="w-fit">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="h-full object-contain"
              />
            </div>
            <div>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="h-full object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[30px] mt-[30px]">
            <div className="col-span-1">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="h-full object-contain"
              />
            </div>
            <div className="col-span-1">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={cn("grid grid-cols-2 gap-[30px] mt-5 ", className)}>
          {images.map((i, index) => (
            <div
              key={i.src}
              className={index == 0 ? firstClassname : otherClassName}
            >
              <img
                src={i.src}
                alt={i.alt}
                className={cn("h-full object-contain", {
                  ["scale-90"]: images.length === 1,
                })}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageCard;
