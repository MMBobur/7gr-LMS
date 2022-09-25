import React from "react";
import { Outlet } from "react-router-dom";
import { Content } from "./style";

import Sidebar from '../Sidebar';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Content>
      <Sidebar />
      <Outlet />
    </Content>
  );
};
