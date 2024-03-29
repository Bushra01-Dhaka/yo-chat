import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/login",
          element:<Login></Login>
        }

      ]
    },
  ]);

  export default router;