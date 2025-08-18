import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from "react";

export enum ENUM_ROUTER {

  LOGIN = "LOGIN",
  HOME = "HOME",
  CONTROLE = "CONTROLE",

}

export type TRouter = `${ENUM_ROUTER}`

export const viewLink: Record<ENUM_ROUTER, { view: boolean, name?: string, icon?: React.ReactNode }> = {
  HOME: {
    view: true,
    name:'Home',
    icon: React.createElement(HomeIcon)
  },
  CONTROLE: {
    view: true,
    name:'Controle',
    icon: React.createElement(AssignmentIcon)
  },
  LOGIN: {
    view: false,
  },
}