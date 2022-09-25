import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/", element: <Fanlar /> },
      { path: "/login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];