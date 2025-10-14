import { RouteObject } from "react-router-dom";
import { ENUM_ROUTER } from "@/routes/enum";
import React from "react";

import Home from "@/views/pages/home/Home";
import Layout from "@/views/layout/index";

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
        name: ENUM_ROUTER.HOME,
        path: 'home/',
        element: React.createElement(Home),
      },
    ],
  },
];