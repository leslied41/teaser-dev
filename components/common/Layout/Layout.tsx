import React from "react";
import type { ReactElement } from "react";
import { Footer } from "../Footer";

const Layout = (page: ReactElement) => {
  return (
    <>
      <div>{page}</div>
      <Footer />
    </>
  );
};

export default Layout;
