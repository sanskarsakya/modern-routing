import React from "react"
const ModuleNotAlowed = () => {
    return <p>Module not allowed</p>
}
interface ModuleGuardProps {
    children:any,
    feature:String
}
export const ModuleGuard = ({children, feature}:ModuleGuardProps) => {
    const isModuleAllowed:boolean = true;
    
  React.useEffect(() => {
    console.log("on -> Module Guard");
  }, []);
    if(!isModuleAllowed) {
        return <ModuleNotAlowed />
    }
    return <>{children}</>
}