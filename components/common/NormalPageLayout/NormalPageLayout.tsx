import React, { FC, ReactNode } from "react";
import { GlobalLayout } from "..";

const NormalPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GlobalLayout>
      <div className="flex  justify-center pt-[337px] pb-[100px]">
        <div className="max-w-[600px] overflow-hidden">{children}</div>
      </div>
    </GlobalLayout>
  );
};

export default NormalPageLayout;
