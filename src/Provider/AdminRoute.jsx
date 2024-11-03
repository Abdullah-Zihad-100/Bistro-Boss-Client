import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {

      const location = useLocation();
      const { loading, user } =useAuth()
      const [isAdmin,isAdminLoading]=useAdmin()
      if (user && isAdmin) {
        return children;
      }
      if (loading || isAdminLoading) {
        return (
          <div className=" text-center my-72">
            <progress className="progress w-56"></progress>
          </div>
        );
      }
      return <Navigate state={location.pathname} to={"/login"} />;
}
export default AdminRoute;