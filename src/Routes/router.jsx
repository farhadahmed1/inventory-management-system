import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateStore from "../pages/CreateStore/CreateStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createStore",
        element: <CreateStore />,
      },
    ],
  },
]);

export default router;
