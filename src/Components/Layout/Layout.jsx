import React from "react";

import MainNavation from "./MainNavation";

export const Layout = (props) => {
  return (
    <div>
      <MainNavation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
