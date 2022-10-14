import React, { memo } from "react";
import { MainNav } from "..";

const Footer = () => {
  return (
    <footer className="w-full  bg-gray-700 p-4 pt-20 ">
      <div className="flex w-full mb-5">
        <div className="flex flex-2 justify-start">
          <MainNav embedIn="footer" />
        </div>
        <div className="flex-1 flex justify-end">
          <div>
            <p className="text-right text-sm text-main-color">
              Co-presented by
            </p>
            <p className="text-right text-sm text-main-color">Jumu Tang &</p>
            <p className="text-right text-sm text-main-color">
              Hong Kong Arts Centre
            </p>
          </div>
        </div>
      </div>

      <hr className="border-none h-[0.5px] bg-secondary-color" />
      <div className="flex w-full mt-4 text-secondary-color text-sm">
        <div className="flex-2">
          <p>
            Highlighted Programme of Hong Kong Arts Centre’s 45th Anniversary
            Celebration
          </p>
          <p>
            This project is sponsored by the Research Grants Council under
            project number 12606618
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <p>© ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
