import React, { FC, useState, useRef, useLayoutEffect, useEffect } from "react";
import Slider from "../slider";
import { CloseIcon } from "../../icons";
import { ArtworkInfo } from "..";
import cn from "clsx";
import { Images } from "../../../public/six/data";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface GalleryProps {
  showArtWork: boolean;
  setShowArtWork: React.Dispatch<React.SetStateAction<boolean>>;
  images?: Images;
}

const Gallery: FC<GalleryProps> = ({ showArtWork, setShowArtWork, images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [infoHeight, setInfoHeight] = useState<number>(0);
  const infoRef = useRef<HTMLDivElement>(null);

  const closeGallery = () => {
    setShowArtWork(false);
  };

  useIsomorphicLayoutEffect(() => {
    if (!infoRef.current) return;
    setInfoHeight(infoRef.current.getBoundingClientRect().height);
  }, [showArtWork]);

  return (
    <section
      aria-label="artwork view"
      className={cn("hidden", {
        ["!block fixed inset-0 bg-black z-40"]: showArtWork,
      })}
    >
      <div className="flex flex-col md:flex-row relative h-[calc(var(--vh)*100)]">
        <button
          onClick={closeGallery}
          className="absolute right-0 top-0"
          aria-label="close"
        >
          <CloseIcon />
        </button>
        <div className="w-[280px] h-fit" ref={infoRef}>
          <ArtworkInfo
            className="mt-6 ml-4"
            info={images ? images.info : undefined}
          />
        </div>
        <div className="flex-1  h-full md:py-20  px-4">
          <div
            className="overflow-hidden md:!h-[calc(100vh-160px)]"
            style={{ height: `calc(100vh - ${infoHeight}px)` }}
          >
            <Slider
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              imageSrcs={images ? images.src : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
