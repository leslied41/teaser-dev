import React, { FC, ReactNode } from "react";
import { NavBar, MenuButton, CurrentLabel, ProgressLoader } from "..";

const GlobalLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuButton className="fixed top-0 right-0 z-30" />
      <NavBar />
      <main>
        {children}
        <CurrentLabel />
      </main>
      <ProgressLoader />
    </>
  );
};

export default GlobalLayout;
