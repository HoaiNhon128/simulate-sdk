import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
