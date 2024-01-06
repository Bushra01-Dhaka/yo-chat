import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
    //   element: <Login></Login>,
    // element: <Register></Register>
    element: <Home></Home>
    },
  ]);

  export default router;