import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { UserProvider } from "./contexts/UserContexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
);
