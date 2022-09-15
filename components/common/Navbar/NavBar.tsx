import React from "react";
import { MainNav } from "..";
import { LocaleSwitch } from "..";
import { useGlobalContext } from "..";
import cn from "clsx";

const NavBar = () => {
  const { openNavbar } = useGlobalContext();

  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-screen bg-black z-20 transition-all duration-300 origin-center",
        {
          ["scale-y-0"]: openNavbar === false,
        }
      )}
    >
      <MainNav embedIn="landing" />
      <LocaleSwitch className="absolute left-0 bottom-0" />
    </div>
  );
};

export default NavBar;
