import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Home from "../containers/Home";

import Room from '../pages/Table'
import Add from '../pages/Table/Items/Add'
import Edit from '../pages/Table/Items/Edit'

export const dashboardRoutes = [
  {
    element: <Home />,
    children: [
      { path: '/room', element: <Room /> },
      { path: '/roomAdd', element: <Add /> },
      { path: `/roomEdit/:id`, element: <Edit /> },
      // { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

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