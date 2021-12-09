import React from "react";
import Footer from "../Footer/Footer";

import MainNavation from "./MainNavation";

export const Layout = (props) => {
  return (
    <div>
      <MainNavation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
