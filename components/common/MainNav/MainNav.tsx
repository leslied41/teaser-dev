import React from "react";

const navList = ["about", "research", "artists", "exhibition"];
const MainNav = () => {
  return (
    <ul>
      {navList.map((l, i) => (
        <li key={i} className="uppercase text-xl text-title-color ">
          <span className="cursor-pointer">{l}</span>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
