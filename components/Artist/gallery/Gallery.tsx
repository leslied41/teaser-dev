import React, { FC, useState } from "react";
import Slider from "../slider";
import { CloseIcon } from "../../icons";
import { ArtworkInfo } from "..";
import cn from "clsx";
import { Images } from "../../../pages/six/data";

interface GalleryProps {
  showArtWork: boolean;
  setShowArtWork: React.Dispatch<React.SetStateAction<boolean>>;
  images?: Images;
}

const Gallery: FC<GalleryProps> = ({ showArtWork, setShowArtWork, images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const closeGallery = () => {
    setShowArtWork(false);
  };

  return (
    <section
      aria-label="artwork view"
      className={cn("hidden ", {
        ["!block fixed inset-0 bg-black z-40 "]: showArtWork,
      })}
    >
      <div className="flex flex-col md:flex-row relative h-screen ">
        <button
          onClick={closeGallery}
          className="absolute right-0 top-0"
          aria-label="close"
        >
          <CloseIcon />
        </button>
        <div className="w-[280px]">
          <ArtworkInfo
            className="mt-6 ml-4"
            info={images ? images.info : undefined}
          />
        </div>
        <div className="flex-1  h-full py-20  px-4">
          <div className="overflow-hidden h-[calc(100vh-160px)]">
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
