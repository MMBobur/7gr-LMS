import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
<<<<<<< HEAD
<<<<<<< HEAD
import Sidebar from "../components/Sidebar"
import Students from "../pages/Students"
import Edit from "../pages/Edit"
import Add from "../pages/Add"
=======
import Fanlar from '../pages/Fanlar';
import Edit from '../pages/Fanlar/Edit';
import Add from '../pages/Fanlar/Add';
=======
import Home from "../containers/Home";
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0

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