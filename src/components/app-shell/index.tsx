import React from "react";
import {  Outlet } from "react-router-dom";
export const AppShell = () => {


  React.useEffect(() => {
    console.log("on -> App shell");
  }, []);

  return <Outlet />
};
