import React, { FC, ReactNode } from "react";
import { NavBar } from "..";
import { MenuButton } from "..";
import s from "./GlobalLayout.module.css";

const GlobalLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuButton className="fixed top-0 right-0 z-30" />
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
