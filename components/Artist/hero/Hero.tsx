import React, { FC } from "react";
import { Button } from "../../common";
import { useLocale } from "../../../hooks";

interface HeroProps {
  setShowArtWork: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: FC<HeroProps> = ({ setShowArtWork }) => {
  const isEn = useLocale();
  const toggleArtWorkView = () => {
    setShowArtWork((prev) => !prev);
  };
  return (
    <section className="h-screen w-full relative">
      <img
        src="/tempo/tempo_artist_header.png"
        alt="artist work"
        className="w-full h-screen object-cover"
      />
      <Button
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        variant="link"
        onClick={toggleArtWorkView}
      >
        {isEn ? "view artwork" : "瀏覽作品"}
      </Button>
    </section>
  );
};

export default Hero;
