import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { CompletedPage } from "../../pages/completed";

export const completedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "completed",
  component: CompletedPage
});
