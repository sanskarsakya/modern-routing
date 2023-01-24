import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/use-auth"
export const RouteShell = () => {

const {isAuthenticated} = useAuth();

  React.useEffect(() => {
    console.log("on -> Route shell");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="p-10 mx-auto max-w-3xl">
        
      {isAuthenticated ? 
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 flex-wrap">
          <NavLink to="/home">
            {({ isActive, isPending }) => (
              <div className={`hover:bg-gray-800 px-2 py-1 border-b-2 ${isActive ? "border-green-500" : "border-transparent" } `}
              >
                Home
              </div>
            )}
            
          </NavLink>
          <NavLink to="/about">
                        {({ isActive, isPending }) => (
              <div className={`hover:bg-gray-800 px-2 py-1 border-b-2 ${isActive ? "border-green-500" : "border-transparent" } `}
              >
              About
              </div>
            )}
          </NavLink>
          <NavLink to="/appraisal/dashboard">
                        {({ isActive, isPending }) => (
              <div className={`hover:bg-gray-800 px-2 py-1 border-b-2 ${isActive ? "border-green-500" : "border-transparent" } `}
              >
                Appraisal Dashboard
              </div>
            )}
          </NavLink>
          <NavLink to="/appraisal/configuration">
                        {({ isActive, isPending }) => (
              <div className={`hover:bg-gray-800 px-2 py-1 border-b-2 ${isActive ? "border-green-500" : "border-transparent" } `}
              >
                Appraisal Configuration
              </div>
            )}
          </NavLink>
       </div>
       <div className="bg-gray-800 p-5 rounded-md">
        <Outlet />
       </div>
      </div>
       : <Navigate to="login" />}
      </div>
    </div>
  );
};


/**
 * start
 *  login
 *      if authenticated
 *          navigate to home
 *      else 
 *          do nothing 
 *end
 * 
 * start    
 *  enter from address bar
 *      check if authenticated
 *          return outlet
 *      else 
 *          navigate to login
 * end
 * 
 * start 
 *  on route change
 *      check if authenticated
 *          return outlet
 *      else 
 *          navigate to login
 * end
 * 
 * 
 * 
 */