import React from "react";
import { GlobalLayout } from "../../components/common";
import {
  Hero,
  MapComponent,
  NavList,
  Profile,
  VenueGraph,
} from "../../components/Artist/";

const Artist = () => {
  return (
    <div className="bg-white">
      <Hero />
      <MapComponent className="mt-[130px]" />
      <NavList />
      <Profile className="mt-20" />
      <VenueGraph className="mt-20 pb-[100px]" />
    </div>
  );
};

Artist.Layout = GlobalLayout;
export default Artist;
