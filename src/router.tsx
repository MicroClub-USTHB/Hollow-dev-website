import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration";
import Challenges from "./views/Challenges";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
]);

export default router;
