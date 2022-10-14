import React, { FC, ReactNode } from "react";
import { NavBar, MenuButton, CurrentLabel } from "..";

const GlobalLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuButton className="fixed top-0 right-0 z-30" />
      <NavBar />
      <main>
        {children}
        <CurrentLabel />
      </main>
    </>
  );
};

export default GlobalLayout;
