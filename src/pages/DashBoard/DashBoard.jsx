import { BsBag, BsBagCheckFill, BsShop } from "react-icons/bs";
import { FaBook, FaCalendarAlt, FaCalendarCheck, FaChessBishop, FaHome, FaShoppingBag, FaUsers } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";
import { MdEmail, MdFoodBank, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

const DashBoard = () => {
  // const isAdmin=true;
  const [isAdmin]=useAdmin();
  const {uers}=useAuth();
    return (
      <div className="flex">
        <div className="bg-[#D1A054] w-52 ps-5">
          <div className="space-y-5 flex items-start flex-col py-5 uppercase ">
            <div>
              <h3 className="text-xl font-bold text-center my-5">
                BISTRO BOSS
                <span className="text-sm font-bold block tracking-widest">
                  Restaurant
                </span>
              </h3>
            </div>
            {isAdmin ? (
              <>
                <NavLink
                  to={"admin-home"}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""}
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaHome size={20} /> Admin home
                  </div>
                </NavLink>
                <NavLink
                  to={"add-items"}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <MdFoodBank size={20} /> add items
                  </div>
                </NavLink>
                <NavLink
                  to="manage-items"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    <TfiMenuAlt size={20} /> manage items
                  </div>
                </NavLink>
                <NavLink
                  className={` ${({ isActive }) =>
                    isActive ? "text-white font-bold" : ""}`}
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaBook size={20} />
                    manage bookings
                  </div>
                </NavLink>
                <NavLink
                  to="users"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaUsers size={20} />
                    all users
                  </div>
                </NavLink>
              </>
            ) : (
              <>
                {" "}
                <NavLink to={"user-home"}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""}
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaHome size={20} /> User home
                  </div>
                </NavLink>
                <NavLink
                  to={"payment-hitory"}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaCalendarAlt size={20} /> payment history
                  </div>
                </NavLink>
                <NavLink
                  to={"add-items"}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaCalendarAlt size={20} /> reservation{" "}
                  </div>
                </NavLink>
                <NavLink
                  to="carts"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    <BsBagCheckFill size={20} /> my Cart
                  </div>
                </NavLink>
                <NavLink to={"add-review"}
                  className={` ${({ isActive }) =>
                    isActive ? "text-white font-bold" : ""}`}
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <MdRateReview size={20} />
                    add review
                  </div>
                </NavLink>
                <NavLink to={"my-booking"}
                  className={` ${({ isActive }) =>
                    isActive ? "text-white font-bold" : ""}`}
                >
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaCalendarCheck size={20} />
                    my booking
                  </div>
                </NavLink>
              </>
            )}

            {/* -----------Shere admin---------- */}
            <div className="border w-5/6"></div>
            <NavLink
              to={"/"}
              className={` ${({ isActive }) =>
                isActive ? "text-white font-bold" : ""}`}
            >
              <div className="flex justify-center items-center gap-2">
                {" "}
                <FaHome size={20} />
                home
              </div>
            </NavLink>
            <NavLink
              to={"/our-menu"}
              className={` ${({ isActive }) =>
                isActive ? "text-white font-bold" : ""}`}
            >
              <div className="flex justify-center items-center gap-2">
                {" "}
                <IoMenu size={20} />
                menu
              </div>
            </NavLink>
            <NavLink
              to={"/our-shop/salad"}
              className={` ${({ isActive }) =>
                isActive ? "text-white font-bold" : ""}`}
            >
              <div className="flex justify-center items-center gap-2">
                {" "}
                <FaShoppingBag size={20} />
                Shop
              </div>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={` ${({ isActive }) =>
                isActive ? "text-white font-bold" : ""}`}
            >
              <div className="flex justify-center items-center gap-2">
                {" "}
                <MdEmail size={20} />
                Contact
              </div>
            </NavLink>
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    );
}
export default DashBoard;