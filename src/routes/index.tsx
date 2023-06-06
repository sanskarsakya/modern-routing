// LIBS
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// SHELLS
import { AppShell } from "../components/app-shell";
import { RouteShell } from "../components/route-shell";

// COMPONENTS
import { Error } from "../components/error";
import { Loading } from "../components/loading";

// HELPERS
import { naviMaker, permissionGuardMaker } from "../helper";

// PAGES
const About = React.lazy(() => import("../pages/about"));
const Home = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/login"));
const Appraisal = React.lazy(() => import("../pages/appraisal"));

// ROUTES
const childRoutes = [
  {
    path: "/",
    element: <RouteShell />,
    errorElement: <Error />,
    children: [
      naviMaker({ fromPath: "/", toPath: "home" }),

      permissionGuardMaker({
        path: "home",
        title: "Home",
        permission: "Home",
        Component: <Home />,
      }),
      permissionGuardMaker({
        path: "about",
        title: "About",
        permission: "About",
        Component: <About />,
      }),

      {
        path: "appraisal/*",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Appraisal />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },

      naviMaker({ fromPath: "*", toPath: "home" }),
    ],
  },
  {
    path: "login",
    element: (
      <React.Suspense fallback={<Loading />}>
        <Login />
      </React.Suspense>
    ),
    errorElement: <Error />,
  },
];

const appRoutes = [
  {
    path: "/",
    element: <AppShell />,
    errorElement: <Error />,
    children: childRoutes,
  },
];

export const routes = createBrowserRouter(appRoutes);
