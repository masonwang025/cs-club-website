import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import BarChartIcon from "@material-ui/icons/BarChart";
import Dashboard from "../components/Dashboard";
import Challenges from "../components/Challenges";
import Leaderboard from "../components/Leaderboard";

export const homeItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    Component: Dashboard,
  },
  {
    name: "Challenges",
    path: "/challenges",
    icon: <AssistantPhotoIcon />,
    Component: Challenges,
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
    icon: <BarChartIcon />,
    Component: Leaderboard,
  },
];
