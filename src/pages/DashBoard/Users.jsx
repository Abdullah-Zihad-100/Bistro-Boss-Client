import {FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";

import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Users = () => {
  const axiosSecure=useAxiosSecure();
     const {data:users=[],refetch}=useQuery(
        {
            queryKey:["users"],
            queryFn:async()=>{
                const res=await axiosSecure.get("/users")
                return  res.data;
            }
            
        }
     )


    const handleMakeAdmin = (user) => {
      axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Set Seccess",
            text: `${user?.name} Admin Role Set Successfully`,
            icon: "success",
          });
        }
      });
    };

    
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
           axiosSecure.delete(`users/${_id}`).then((res) => {
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
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"ALL USER"} />
      <div className="my-5 bg-slate-100 p-10 w-5/6 mx-auto">
        <h1 className="lg:text-2xl font-semibold text-base">
          TOTAL ITEMS: {users?.length}
        </h1>

        <div className="">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th>#</th>
                <th>EMAIL</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows */}
              {users?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?.name}</td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                  ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="p-2 ms-3 rounded-md bg-[#D1A054]  text-white mt-1 "
                      >
                        <FaUsers size={20} />
                      </button>
                    )}
                  </td>
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
export default Users;
