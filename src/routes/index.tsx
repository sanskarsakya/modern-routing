// LIBS
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// SHELLS
import { AppShell } from "../components/app-shell";
import { RouteShell } from "../components/route-shell";

// COMPONENTS
import { Loading } from "../components/loading";
import { Error } from "../components/error";

// HELPERS
import { naviMaker, permissionGuardMaker, moduleGuardMaker } from "../helper";

// PAGES
const About = React.lazy(() => import("../pages/about"));
const Home = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/login"));
// const AppraisalRoutes = React.lazy(() => import("../pages/appraisal"));


const AppraisalShell = React.lazy(
  () => import("../pages/appraisal/appraisal-shell")
);
const AppraisalDashboard = React.lazy(
  () => import("../pages/appraisal/dashboard")
);
const AppraisalConfiguration = React.lazy(
  () => import("../pages/appraisal/configuration")
);

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
        path: "appraisal",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Appraisal />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      moduleGuardMaker({
        path: "appraisal",
        feature: "appraisal",
        Component: <AppraisalShell />,
        children: [
          naviMaker({ fromPath: "", toPath: "/appraisal/dashboard" }),
          permissionGuardMaker({
            path: "dashboard",
            title: "Appraisal Dashboard",
            permission: "AppraisalDashboard",
            Component: <AppraisalDashboard />,
          }),

          permissionGuardMaker({
            path: "configuration",
            title: "Appraisal Configuration",
            permission: "AppraisalConfiguration",
            Component: <AppraisalConfiguration />,
          }),
          naviMaker({ fromPath: "*", toPath: "/appraisal/dashboard" }),
        ],
      }),
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

const appRoutes = [ {
    path: "/",
    element: <AppShell />,
    errorElement: <Error />, 
    children:childRoutes
    }]

export const routes = createBrowserRouter(appRoutes);
