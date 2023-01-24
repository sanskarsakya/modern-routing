import {useAuth} from "../hooks/use-auth"
import {Navigate} from "react-router-dom"
// import {isAuthenticated} from "../constants"
export const Login = () => {

const {isAuthenticated} = useAuth()
  if(isAuthenticated) {
    return <Navigate to="/home"/>
  }
  return    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="p-10 mx-auto max-w-3xl">
   <div className="bg-gray-800 p-5 rounded-md">
        Login
       </div>
   </div>
   </div>
   ;
};

export default Login