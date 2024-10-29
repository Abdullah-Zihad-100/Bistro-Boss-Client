import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContaxt } from "../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../../Hooks/useCarts";
const Navber = () => {
  const { user, logout } = useContext(AuthContaxt);
  const [carts]=useCarts();

  const handleLogOut = () => {
    logout().then(() => {});
  };
  const Links = (
    <>
      <NavLink className={"m-2 font-semibold"} to="/">
        HOME
      </NavLink>
      <NavLink className={"m-2 font-semibold"} to="/contact">
        CONTACT
      </NavLink>
      <NavLink className={"m-2 font-semibold"} to="dashboard">
        DASHBOARD
      </NavLink>
      <NavLink className={"m-2 font-semibold"} to="/our-menu">
        OUR MENU
      </NavLink>
      {user ? (
        <>
          <NavLink className={"m-2 font-semibold"} to="/our-shop/salad">
            OUR SHOP
          </NavLink>
          <div className="relative">
            <div className="bg-red-500 text-center rounded-full w-2/4 absolute right-0">
              {carts?.length}
            </div>

            <Link to={"/dashboard/carts"}>
              <FaCartShopping size={25} className="m-2 cursor-pointer" />
            </Link>
          </div>
        </>
      ) : (
        <NavLink className={"m-2 font-semibold"} to="/our-shop/salad">
          OUR SHOP
        </NavLink>
      )}
      {user ? (
        <>
          <li
            onClick={handleLogOut}
            className="font-semibold uppercase cursor-pointer m-2"
          >
            Sign Out
          </li>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbBNUbhGXxMz-lGCWuThAN-peufpOv3sDJw&s"
                }
              />
            </div>
          </div>
        </>
      ) : (
        <NavLink className={"m-2 font-semibold"} to="/login">
          LOGIN
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-black/20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-yellow-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <h3 className="text-xl font-semibold ">
          BISTRO BOSS
          <span className="text-sm font-normal block tracking-widest">
            Restaurant
          </span>
        </h3>
      </div>
      <div className="navbar hidden lg:flex justify-end">
        <ul className="menu menu-horizontal">{Links}</ul>
      </div>
    </div>
  );
};
export default Navber;
