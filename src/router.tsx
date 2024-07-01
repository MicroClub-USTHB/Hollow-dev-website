import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration";
import Challenges from "./views/Challenges";
import ErrorPage from "./views/Error404";
import { useState } from "react";
import Loading from "./components/UI/Loading";
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

export default function Router() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  if (loading) {
    return <Loading />;
  }
  return <RouterProvider router={router} />;
}
