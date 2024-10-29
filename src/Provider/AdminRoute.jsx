import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContaxt } from "./AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {

      const location = useLocation();
      const { loadong, user } = useContext(AuthContaxt);
      const [isAdmin,isAdminLoading]=useAdmin()
      if (user && isAdmin) {
        return children;
      }
      if (loadong || isAdminLoading) {
        return (
          <div className=" text-center my-72">
            <progress className="progress w-56"></progress>
          </div>
        );
      }
      return <Navigate state={location.pathname} to={"/login"} />;
    return
}
export default AdminRoute;