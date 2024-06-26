import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration";
import Challenges from "./views/Challenges";
import ErrorPage from "./views/Error404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
