import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar"
import Students from "../pages/Students"
import Edit from "../pages/Edit"
import Add from "../pages/Add"
=======
import Fanlar from '../pages/Fanlar';
import Edit from '../pages/Fanlar/Edit';
import Add from '../pages/Fanlar/Add';



>>>>>>> master
export const publicRoutes = [
  {
    element: <Auth />,
    children: [
<<<<<<< HEAD
      { path: "/", element: <Login /> },
      { path: "/login", element: <Students /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
export const dashboardRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/students", element: <Students /> },
      { path: "/edit", element: <Edit /> },
      { path: "/add", element: <Add /> },
      { path: "/login", element: <Students /> },
=======
      { path: "/", element: <Fanlar /> },
      { path: "/login", element: <Login /> },
>>>>>>> master
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