import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import {
  publicRoutes,
  dashboardRoutes,
} from "../routes/routes";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { token } = useSelector((state) => state.authReducer);

  function parseJwt(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  let waiter;

  if (token) {
    let role = parseJwt(token);
    waiter = role.role === "waiter" ? true : false;
  }

  const publicUser = token ? false : true;

  const content = useRoutes(
    // publicUser ? publicRoutes : waiter ? dashboardRoutes : dashboardRoutes
    dashboardRoutes
  );

  return <>{content}</>;
};
