import React from "react";
import { naviMaker, permissionGuardMaker, moduleGuardMaker } from "../../helper";
import { RouterProvider } from "react-router-dom";

const AppraisalShell = React.lazy(() => import("./appraisal-shell"));
const AppraisalDashboard = React.lazy(() => import("./dashboard"));
const AppraisalConfiguration = React.lazy(() => import("./configuration"));

const AppraisalRoutes = [moduleGuardMaker({
  path: "/",
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
})];

// export const Appraisal = () => {
//     return <div>Hello</div>
//     return <RouterProvider router={AppraisalRoutes} />;
// }
export default AppraisalRoutes;
