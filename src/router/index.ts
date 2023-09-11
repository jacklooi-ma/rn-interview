import { ReactRouter } from "@tanstack/react-router";
import { 
  rootRoute,
  homeRoute,
  completedRoute,
  incompletedRoute
} from "./routes"

const routeTree = rootRoute.addChildren([homeRoute, completedRoute, incompletedRoute]);

const router = new ReactRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
