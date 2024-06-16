import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import Registration from "./views/Registration";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/registration",
    element: (
      <Layout>
        <Registration />
      </Layout>
    ),
  },
]);

export default router;
