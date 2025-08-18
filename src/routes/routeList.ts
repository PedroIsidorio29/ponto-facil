import { RouteObject } from "react-router-dom";
import { ENUM_ROUTER } from "./enum";
import React from "react";

import Login from "../views/pages/auth/login/Login";
import Layout from "../views/layout/index";
import Home from "../views/pages/home/Home";
import Controle from "../views/pages/controle/Controle";

export type AppRouteObject = RouteObject & {
  name?: ENUM_ROUTER,
  children?: AppRouteObject[]
}

export const routeList: AppRouteObject[] = [
  {
    path: "/",
    element: React.createElement(Layout),
    children: [
      {
        name: ENUM_ROUTER.LOGIN,
        path: 'login',
        element: React.createElement(Login),
      },
      {
        name: ENUM_ROUTER.HOME,
        path: 'home',
        element: React.createElement(Home),
      },
      {
        name: ENUM_ROUTER.CONTROLE,
        path: 'controle',
        element: React.createElement(Controle),
      },
    ],
  },
];

