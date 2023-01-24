import { RouterProvider } from "react-router-dom";
import { routes } from "../routes";

export const AppProviders = () => {
  return <RouterProvider router={routes} />;
};
