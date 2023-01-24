import React from "react";
import { PermissionGuard } from "../components/permission-guard";
import { Error } from "../components/error";

export const permissionGuardMaker = ({
  path,
  title,
  permission,
  Component,
  children = [],
}: {
  title: string;
  permission: string;
  path: string;
  Component: any;
  children?: any[];
}) => {
  return {
    path,
    element: (
      <PermissionGuard title={title}>
        <React.Suspense fallback={<p>Loading...</p>}>
          {Component}
        </React.Suspense>
      </PermissionGuard>
    ),
    errorElement: <Error />,
    ...(children?.length !== 0 && { children }),
  };
};
