import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Sidebar from "../components/Sidebar"
import Students from "../pages/Students"
import Edit from "../pages/Edit"
import Add from "../pages/Add"
export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
export const dashboardRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/sidebar", element: <Sidebar /> },
      { path: "/edit", element: <Edit /> },
      { path: "/add", element: <Add /> },
      { path: "/login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];