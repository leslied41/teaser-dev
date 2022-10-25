import React, { useState } from "react";
import { GlobalLayout } from "../../components/common";
import {
  Hero,
  MapComponent,
  NavList,
  Profile,
  VenueGraph,
  Gallery,
} from "../../components/Artist/";

const Artist = () => {
  const [showArtWork, setShowArtWork] = useState(false);
  return (
    <div className="bg-white relative">
      <Hero setShowArtWork={setShowArtWork} />
      <MapComponent />
      <NavList />
      {/* <Profile className="mt-20" /> */}
      <VenueGraph className="mt-[250px] pb-[100px]" />
      <Gallery showArtWork={showArtWork} setShowArtWork={setShowArtWork} />
    </div>
  );
};

Artist.Layout = GlobalLayout;
export default Artist;
