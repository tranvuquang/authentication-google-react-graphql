import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
