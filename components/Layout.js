import React from "react";
import SideNavbar from "./SideNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideNavbar />
      <main className="ml-[257px]">{children}</main>
    </div>
  );
};

export default Layout;
