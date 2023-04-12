import React from "react";

import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children, title, headerTitle }) => {
  return (
    <>
      <Meta title={title} />
      <Header title={headerTitle} />
      <main>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  title: "Next.js Test App - Home",
  headerTitle: "Next.js Test",
};

export default Layout;
