import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration/index";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
