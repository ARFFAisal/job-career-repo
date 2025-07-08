import {
  createBrowserRouter,
} from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/SignIn/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";

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
            path: '/jobs/:id',
            Component: JobDetails,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
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