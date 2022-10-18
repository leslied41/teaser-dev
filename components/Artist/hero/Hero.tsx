import React from "react";
import { Button } from "../../common";
import { useLocale } from "../../../hooks";

interface Props {}

const Hero = (props: Props) => {
  const isEn = useLocale();
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
      >
        {isEn ? "view artwork" : "瀏覽作品"}
      </Button>
    </section>
  );
};

export default Hero;
