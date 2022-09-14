import React from "react";
import type { ReactElement } from "react";
import { Footer } from "../Footer";

const Layout = (page: ReactElement) => {
  return (
    <>
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Layout;
