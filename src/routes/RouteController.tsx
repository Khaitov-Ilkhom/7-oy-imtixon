import {useRoutes} from "react-router-dom";
import React, {LazyExoticComponent} from "react";
import {SuspenseElement as Suspense} from "../utils";

const Home: LazyExoticComponent<any> = React.lazy(() => import("../routes/home/Home.tsx"))
const Auth: LazyExoticComponent<any> = React.lazy(() => import("../routes/auth/Auth.tsx"))
const Login: LazyExoticComponent<any> = React.lazy(() => import("../routes/auth/login/Login.tsx"))
const Register: LazyExoticComponent<any> = React.lazy(() => import("../routes/auth/register/Register.tsx"))

const Profile: LazyExoticComponent<any> = React.lazy(() => import("../routes/profile/Profile.tsx"))
const Details: LazyExoticComponent<any> = React.lazy(() => import("../routes/details/Details.tsx"))
const Liked: LazyExoticComponent<any> = React.lazy(() => import("../routes/liked/Liked.tsx"))
const Carts: LazyExoticComponent<any> = React.lazy(() => import("../routes/carts/Carts.tsx"))

const RouteController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "auth",
      element: <Suspense><Auth/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><Login/></Suspense>,
        },
        {
          path: "signup",
          element: <Suspense><Register/></Suspense>
        }
      ]
    },
    {
      path: "profile",
      element: <Suspense><Profile/></Suspense>
    },
    {
      path: "details/:id",
      element: <Suspense><Details/></Suspense>
    },
    {
      path: "liked",
      element: <Suspense><Liked/></Suspense>
    },
    {

    }
  ])
}
export default RouteController
