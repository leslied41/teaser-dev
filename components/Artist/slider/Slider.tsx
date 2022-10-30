import React, { FC, useRef, useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ArrowIcon } from "../../icons";

export interface SliderProps {
  className?: string;
  currentIndex?: number;
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
  imageSrcs?: string[];
}

const Slider: FC<SliderProps> = ({
  className,
  currentIndex,
  setCurrentIndex,
  imageSrcs,
}) => {
  const splideRef = useRef<any>(null);
  const [amountOfSlides, setAmountOfSlides] = useState<number>(0);

  useEffect(() => {
    if (!splideRef.current) return;
    setAmountOfSlides(splideRef.current.slides.length);
  }, []);

  return (
    <Splide
      hasTrack={false}
      aria-label="Artwork gallery"
      ref={splideRef}
      options={{ rewind: true }}
      onMoved={(newIndex) => setCurrentIndex!(newIndex.index)}
    >
      <SplideTrack>
        {imageSrcs?.map((src) => (
          <SplideSlide key={src}>
            <img src={src} alt={src} className="w-full h-full object-contain" />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows">
        <button
          className="splide__arrow splide__arrow--prev"
          aria-label="previous"
        >
          <ArrowIcon />
        </button>
        <button className="splide__arrow splide__arrow--next" aria-label="next">
          <ArrowIcon className="rotate-180" />
        </button>
      </div>
      <ul className="fixed left-4 bottom-6">
        <li>{`${currentIndex! + 1} / ${amountOfSlides}`}</li>
      </ul>
    </Splide>
  );
};

export default Slider;
