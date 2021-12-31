import { PathRouteProps } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./pages/landing";

const routeDefinitions: PathRouteProps[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/history",
    element: <NotFound />,
  },
  {
    path: "/process",
    element: <NotFound />,
  },
  {
    path: "/about",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routeDefinitions;
