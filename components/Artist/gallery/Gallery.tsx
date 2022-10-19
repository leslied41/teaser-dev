import React, { FC, useState } from "react";
import Slider from "../slider";
import { CloseIcon } from "../../icons";
import { ArtworkInfo } from "..";
import cn from "clsx";

interface GalleryProps {
  showArtWork: boolean;
  setShowArtWork: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery: FC<GalleryProps> = ({ showArtWork, setShowArtWork }) => {
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
      <div className="flex relative h-screen ">
        <button
          onClick={closeGallery}
          className="absolute right-0 top-0"
          aria-label="close"
        >
          <CloseIcon />
        </button>
        <div className="w-[300px]">
          <ArtworkInfo
            className="mt-6 ml-4"
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="flex-1  h-full py-20  px-4">
          <div className="overflow-hidden h-[calc(100vh-160px)]">
            <Slider
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
