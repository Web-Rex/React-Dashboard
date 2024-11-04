import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardCard from "../Pages/DashboardCard/DashboardCard";

import Login from "../Login/Login";
import RegisterFrom from "../RegisterFrom/RegisterFrom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <DashboardCard></DashboardCard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <RegisterFrom></RegisterFrom>,
      },
    ],
  },
]);
