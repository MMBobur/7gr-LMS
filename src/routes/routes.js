import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Dashboard from '../containers/Dashboard';
import Guruh from "../pages/Guruh";
import EditGuruh from "../pages/Guruh/edit";

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

      { path: "/talaba", element: < NotFound/> },
      { path: "/talaba/edit/:id", element: < NotFound/> },
      { path: "/talaba/added", element: < NotFound/> },

      { path: "/xodim", element: < NotFound/> },
      { path: "/xodim/edit/:id", element: < NotFound/> },
      { path: "/xodim/added", element: < NotFound/> },

      { path: "/fanlar", element: < NotFound/> },
      { path: "/fanlar/edit/:id", element: < NotFound/> },
      { path: "/fanlar/added", element: < NotFound/> },

      { path: "/qabul", element: < NotFound/> },
      { path: "/qabul/edit/:id", element: < NotFound/> },
      { path: "/qabul/added", element: < NotFound/> },

      { path: "/bosqich", element: < NotFound/> },
      { path: "/bosqich/edit/:id", element: < NotFound/> },
      { path: "/bosqich/added", element: < NotFound/> },

      { path: "/xona", element: < NotFound/> },
      { path: "/xona/edit/:id", element: < NotFound/> },
      { path: "/xona/added/", element: < NotFound/> },

      { path: "/guruh", element: < Guruh/> },
      { path: "/guruh/edit/:id", element: < EditGuruh/> },
      { path: "/guruh/added", element: < EditGuruh/> },

      { path: "/tolov", element: < NotFound/> },
      { path: "/tolov/edit/:id", element: < NotFound/> },
      { path: "/tolov/added", element: < NotFound/> },

      { path: "/davomat", element: < NotFound/> },
      { path: "/davomat/edit/:id", element: < NotFound/> },
      { path: "/davomat/added", element: < NotFound/> },

      { path: "/ishhaqi", element: < NotFound/> },
      { path: "/ishhaqi/edit/:id", element: < NotFound/> },
      { path: "/ishhaqi/added", element: < NotFound/> },

      { path: "/xarajat", element: < NotFound/> },
      { path: "/xarajat/edit/:id", element: < NotFound/> },
      { path: "/xarajat/added", element: < NotFound/> },

      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/xodim" /> },
    ],
  },
];