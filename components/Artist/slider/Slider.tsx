import React, { FC, useRef, useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ArrowIcon } from "../../icons";
import Image from "next/image";

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
  // const initialLoaded = useMemo(() => Array(imageSrcs!.length).fill(false), []);
  // const [loaded, setLoaded] = useState<Boolean[]>(initialLoaded);

  useEffect(() => {
    if (!splideRef.current) return;
    setAmountOfSlides(splideRef.current.slides.length);
  }, []);

  // const imgLoad = useCallback((i: number) => {
  //   setLoaded((prev) =>
  //     prev.map((l, index) => {
  //       if (index === i) l = true;
  //       return l;
  //     })
  //   );
  // }, []);

  return (
    <Splide
      hasTrack={false}
      aria-label="Artwork gallery"
      ref={splideRef}
      options={{ rewind: true }}
      onMoved={(newIndex) => {
        setCurrentIndex!(newIndex.index);
      }}
    >
      <SplideTrack>
        {imageSrcs?.map((src, i) => (
          <SplideSlide key={src} className="relative">
            <Image
              layout="fill"
              src={src}
              alt={src}
              className="w-full h-full object-contain"
              //onLoad={() => imgLoad(i)}
            />

            {/* {!loaded[i] && (
              <Skeleton
                variant="rectangular"
                className="w-full !h-ful"
                animation="wave"
              />
            )} */}
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
