import React from "react";
import { MonteCarlo, Montserrat } from "next/font/google";

import Meta from "./Meta";
import Header from "./Header";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Layout = ({ children, title, headerTitle }) => {
  return (
    <>
      <div className={montserrat.className}>
        <Meta title={title} />
        <Header title={headerTitle} />
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "Next.js Test App - Home",
  headerTitle: "Next.js Test",
};

export default Layout;
