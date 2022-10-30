import React from "react";
import { MainNav } from "..";
import { LocaleSwitch, SocialMedia } from "..";
import { useGlobalContext } from "..";
import { useDisableScroll } from "../../../hooks";
import cn from "clsx";

const NavBar = () => {
  const { openNavbar } = useGlobalContext();
  useDisableScroll(openNavbar);

  return (
    <div
      className={cn(
        "fixed inset-0 w-full bg-black z-20 transition-all duration-300 origin-center",
        {
          ["scale-y-0"]: openNavbar === false,
        }
      )}
    >
      <MainNav embedIn="navbar" />
      <div className="absolute left-0 bottom-0  items-center flex gap-x-2">
        <LocaleSwitch />
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;
