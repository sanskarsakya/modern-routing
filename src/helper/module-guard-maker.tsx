import React from "react";
import { ModuleGuard } from "../components/module-guard";
import { Error } from "../components/error";

export const moduleGuardMaker = ({ feature, path, Component, children = [] }: { feature: string; path: string; Component: any; children?: any[] }) => {
  return {
    path,
    element: (
      <ModuleGuard feature={feature}>
        <React.Suspense fallback={<p>Loading...</p>}>{Component}</React.Suspense>
      </ModuleGuard>
    ),
    errorElement: <Error />,
    ...(children?.length !== 0 && { children }),
  };
};
