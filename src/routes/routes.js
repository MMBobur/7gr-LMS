import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Auth from "../containers/Auth";
import Dashboard from '../containers/Dashboard';
import Guruh from "../pages/Guruh";
import EditGuruh from "../pages/Guruh/edit";
import Fanlar from "../pages/Fanlar";
import AddFanlar from "../pages/Fanlar/Add";
import EditFanlar from "../pages/Fanlar/Edit";
import Xona from "../pages/Table";
import AddXona from "../pages/Table/Items/Add";
import EditXona from "../pages/Table/Items/Edit";
import Talaba from "../pages/Students";
import AddTalaba from "../pages/Students/Add";
import EditTalaba from "../pages/Students/Edit";

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

      { path: "/talaba", element: < Talaba/> },
      { path: "/talaba/edit", element: < EditTalaba/> },
      { path: "/talaba/added", element: < AddTalaba/> },

      { path: "/xodim", element: < NotFound/> },
      { path: "/xodim/edit/:id", element: < NotFound/> },
      { path: "/xodim/added", element: < NotFound/> },

      { path: "/fanlar", element: < Fanlar/> },
      { path: "/fanlar/edit/:id", element: < EditFanlar/> },
      { path: "/fanlar/added", element: < AddFanlar/> },

      { path: "/qabul", element: < NotFound/> },
      { path: "/qabul/edit/:id", element: < NotFound/> },
      { path: "/qabul/added", element: < NotFound/> },

      { path: "/bosqich", element: < NotFound/> },
      { path: "/bosqich/edit/:id", element: < NotFound/> },
      { path: "/bosqich/added", element: < NotFound/> },

      { path: "/xona", element: < Xona/> },
      { path: "/xona/edit/:id", element: < EditXona/> },
      { path: "/xona/added", element: < AddXona/> },

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