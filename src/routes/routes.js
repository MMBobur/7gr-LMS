import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Fanlar from '../pages/Fanlar';
import Edit from '../pages/Fanlar/Edit';
import Add from '../pages/Fanlar/Add';



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


export const dashboardRoutes = [
  {
    // element: <Auth />,
    children: [
      { path: "/", element: <Fanlar /> },
      { path: "/edit/:id", element: <Edit /> },
      { path: "/add", element: <Add /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];