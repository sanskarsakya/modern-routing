import React from "react"
import {Helmet} from "react-helmet";

const PermissionNotAlowed = () => {
    return <p>Permission not allowed</p>
}
interface PermissionGuardProps {
    children:any,
    title:string
}
export const PermissionGuard = ({children, title}:PermissionGuardProps) => {
    const isPermissionAllowed :boolean= true
    
  React.useEffect(() => {
    console.log("on -> Permission Guard");
  }, []);
    if(!isPermissionAllowed) {
        return <PermissionNotAlowed /> 
    }
    return <>
      <Helmet>
          <title>{title}</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      {children}
    </>
}