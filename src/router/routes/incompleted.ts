import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { IncompletedPage } from "../../pages/incompleted";

export const incompletedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "incompleted",
  component: IncompletedPage
});
