import {
  createBrowserRouter,
} from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/SignIn/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayouts,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
            path: "/register",
            Component: Register,
        },
        {
            path: '/signin',
            Component: Signin,
        }
    ]
  },
]);

export default router;