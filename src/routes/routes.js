import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../containers/Auth";
import Home from "../containers/Home";
import InputR from "../pages/Steps/InputR";
import Steps from "../pages/Steps/Steps";


export const dashboardRoutes = [
  {
    element: <Home />,
    children: [
      { path: '/steps', element: <Steps /> },
      { path: '/inputr', element: <InputR /> },
      { path: "*", element: <Navigate to="/steps" /> },
    ],
  },
];

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
