import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Shared/Navber";

const MainLayout = () => {
  const loaction = useLocation();
  console.log(location.pathname);
  const headerFooterRemove = loaction.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {headerFooterRemove || (
        <div className="absolute top-0 left-0 right-0 z-10 max-w-7xl mx-auto">
          <Navber />
        </div>
      )}
      <Outlet />
      {
        headerFooterRemove || 
    <Footer/>
      }
    </div>
  );
};
export default MainLayout;
