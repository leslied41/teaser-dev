import React, { FC, ReactNode } from "react";
import { NavBar } from "..";
import { LandingMenuIcon } from "../../icons";
import { useGlobalContext } from "..";
import s from "./GlobalLayout.module.css";

const GlobalLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { openNavbar, setOpenNavbar } = useGlobalContext();
  console.log(openNavbar, setOpenNavbar);
  const handleNavBar = () => setOpenNavbar!();

  return (
    <>
      <button onClick={handleNavBar} className="fixed top-0 right-0 z-10 ">
        <LandingMenuIcon />
      </button>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
