import React from "react";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
