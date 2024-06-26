import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration";
import ErrorPage from "./views/Error404";
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
    path: "*",
    element: <ErrorPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);

export default router;
