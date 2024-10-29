import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure();
    const [carts,refetch]=useCarts();

    const { data } = useQuery({
      queryKey: ["payments"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`);
        return res.data;
      },
    });
console.log(data)
    return (
      <>
        <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"ALL USER"} />
        <div className="my-5 bg-slate-100 p-10 w-5/6 mx-auto">
          <h1 className="lg:text-2xl font-semibold text-base my-2">
            TOTAL PAYMENTS: {data?.length}
          </h1>

          <div className="">
            <table className="table">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#D1A054] text-white uppercase">
                  <th>EMAIL</th>
                  <th>Transaction Id</th>
                  <th>Total price</th>
                  <th>Payment date</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-semibold">
                {/* Table Rows */}
                {data?.map((item) => (
                  <tr key={item?._id}>
                    <td>{item?.email}</td>
                    <td>{item?.transactionId}</td>
                    <td>{item?.price}$</td>
                    <td>{item?.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}
export default PaymentHistory;