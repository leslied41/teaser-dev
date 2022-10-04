import React, { FC, ReactNode } from "react";
import { NavBar, MenuButton } from "..";

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
