import React from "react";
import { useRoutes } from "react-router-dom";
import { moduleGuardMaker, naviMaker, permissionGuardMaker } from "../../helper";

const AppraisalShell = React.lazy(() => import("./appraisal-shell"));
const AppraisalDashboard = React.lazy(() => import("./dashboard"));
const AppraisalConfiguration = React.lazy(() => import("./configuration"));

const AppraisalRoutes = [
  moduleGuardMaker({
    path: "",
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
];

const Appraisal = () => {
  const element = useRoutes(AppraisalRoutes);
  return <>{element}</>;
};

export default Appraisal;
