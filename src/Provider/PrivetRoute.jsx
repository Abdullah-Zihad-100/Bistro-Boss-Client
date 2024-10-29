import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContaxt } from "./AuthProvider";

const PrivetRoute = ({children}) => {
    const location=useLocation();
    const {loadong,user}=useContext(AuthContaxt);
    if(user){
      return children
    }
    if(loadong){
      return (
        <div className=" text-center my-72">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
    return <Navigate state={location.pathname} to={"/login"}/>
}
export default PrivetRoute;