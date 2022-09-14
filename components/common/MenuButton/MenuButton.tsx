import React, { FC } from "react";
import { LandingMenuIcon, LandingMenuCloseIcon } from "../../icons";
import { useGlobalContext } from "..";
import cn from "clsx";

interface Props {
  className: string;
}

const MenuButton: FC<Props> = ({ className }) => {
  const { openNavbar, setOpenNavbar } = useGlobalContext();
  const handleNavBar = () => {
    if (!setOpenNavbar) return;
    setOpenNavbar();
  };
  return (
    <button className={className} onClick={handleNavBar}>
      <LandingMenuIcon
        className={cn("hidden", { ["!block"]: openNavbar === false })}
      />
      <LandingMenuCloseIcon
        className={cn("hidden", { ["!block"]: openNavbar === true })}
      />
    </button>
  );
};

export default MenuButton;
