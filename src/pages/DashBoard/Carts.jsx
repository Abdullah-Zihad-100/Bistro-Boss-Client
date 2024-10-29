import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";
import useCarts from "../../Hooks/useCarts";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Carts = () => {
  const axiosSecure=useAxiosSecure()
  const [carts, refetch] = useCarts();
  const totalPrice = carts?.reduce(
    (total, currentValue) => total + currentValue?.price,
    0
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${_id}`).then((res) => {
          console.log(res);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        });

      }
    });
  };
  return (
    <>
      <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Carts"} />
      <div className="my-5 bg-slate-100 p-10 w-5/6 mx-auto">
        <div className="flex items-center justify-between gap-5 my-2">
          <h1 className="lg:text-2xl font-semibold text-base">
            TOTAL ITEMS: {carts?.length}
          </h1>
          <h1 className="lg:text-2xl font-semibold text-base">
            TOTAL PRICE:${totalPrice}
          </h1>
          {carts.length ? (
            <Link to={"/dashboard/payment"}>
              <button className="btn text-white font-semibold bg-[#D1A054]">
                PAY
              </button>
            </Link>
          ) : (
            <button disabled className="btn text-white font-semibold bg-[#D1A054]">
              PAY
            </button>
          )}
        </div>
        <div className="">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows */}
              {carts?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded h-12 w-12">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td onClick={() => handleDelete(item?._id)}>
                    <MdDelete
                      size={30}
                      className="text-white bg-red-600 p-2 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Carts;
