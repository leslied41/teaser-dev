import React, { useState } from "react";
import type { ReactElement } from "react";
import { NavBar } from "..";
import { LandingMenuIcon } from "../../icons";
import { GlobalProvider } from "..";
import { useGlobalContext } from "..";
import s from "./GlobalLayout.module.css";

const GlobalLayout = (page: ReactElement) => {
  const { openNavbar, setOpenNavbar } = useGlobalContext();
  console.log(openNavbar, setOpenNavbar);
  const handleNavBar = () => setOpenNavbar!();

  return (
    <GlobalProvider>
      <button onClick={handleNavBar} className="fixed top-0 right-0 z-10 ">
        <LandingMenuIcon />
      </button>
      <NavBar />
      <main>{page}</main>
    </GlobalProvider>
  );
};

export default GlobalLayout;
