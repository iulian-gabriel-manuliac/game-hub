import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
  //   {
  //     element: <PrivateRoutes />,
  //     children: [
  //       {
  //         path: "users",
  //         element: <UsersPage />,
  //         children: [{ path: ":id", element: <UserDetail /> }],
  //       },
  //     ],
  //   },
]);

export default router;
