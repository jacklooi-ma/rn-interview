import { Route } from "@tanstack/react-router";
import { HomePage } from "../../pages/home";
import { rootRoute } from "./root";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
