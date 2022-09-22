import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Dashboard from '../containers/Dashboard';

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
    element: <Dashboard />,
    children: [
      { path: "/", element: < NotFound/> },
      { path: "/xodim", element: < NotFound/> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/xodim" /> },
    ],
  },
];