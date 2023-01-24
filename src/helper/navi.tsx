import React from "react";
import { Navigate } from "react-router-dom";
import { Error } from "../components/error";

interface naivgateMakerProps {
  fromPath: string;
  toPath: string;
}
export const naviMaker = (props: naivgateMakerProps) => {
  const { fromPath, toPath } = props;
  return {
    path: fromPath,
    element: <Navigate to={toPath} />,
    errorElement: <Error />,
  };
};
