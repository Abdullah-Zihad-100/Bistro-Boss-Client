import { FaStar, FaWallet } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import { IoIosCall, IoIosCart } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import useMenu from "../../Hooks/useMenu";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const [menu] = useMenu();
  const axiosSecure = useAxiosSecure();
  console.log(menu);
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(data);


  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(data);




  return (
    <div className="w-5/6 mx-auto mt-10">
      <h2 className="text-3xl font-bold">
        Hi, Welcome {!user ? "Back" : user?.displayName}!
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-5 text-center">
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-purple-400 to-slate-200 rounded-md text-white">
          <FaWallet className="text-white text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">00</h3>
            <p className="text-lg font-semibold">Menu</p>
          </div>
        </div>
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-yellow-500 to-slate-200 rounded-md text-white">
          <AiFillHome className="text-white text-4xl" />
          <div>
            <h3 className="text-2xl font-bold">{menu.length}</h3>
            <p className="text-lg font-semibold">Shop</p>
          </div>
        </div>
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-rose-500 to-slate-200 rounded-md text-white">
          <IoIosCall className="text-white text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">3</h3>
            <p className="text-lg font-semibold">Contact</p>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="flex-1 bg-[#FFEDD5] justify-center items-center text-center md:p-10 p-5">
          <div className="avatar">
            <div className="ring-yellow-600 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">
            {user?.displayName}
          </h2>
        </div>
        <div className="flex-1 bg-[#FEF9C3] md:p-10 p-5">
          <h2 className="text-2xl font-semibold text-left">Your Activities</h2>

          <div className="uppercase text-sm space-y-1 mt-3">
            <div className="text-blue-500 flex gap-1">
              <IoIosCart className="text-lg" /> orders: {data?.length}
            </div>
            <div className="text-[#00C4A1] flex gap-1">
              <FaStar className="text-lg" /> reviews: {reviews?.length}
            </div>
            <div className="text-orange-300 flex gap-1">
              <MdDateRange className="text-lg" /> bookings: 0
            </div>
            <div className="text-orange-600 flex gap-1">
              <FaWallet className="text-lg" /> payments: {data?.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHome;
