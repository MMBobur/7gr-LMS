import React from "react";
import { Outlet } from "react-router-dom";
import { Content } from "./style";

import Sidebar from "../Dashboard/Sidebar";


export default () => {
  return (
    <Content>
      <Sidebar />
      <Outlet />
    </Content>
  );
};
