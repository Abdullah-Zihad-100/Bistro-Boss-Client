import { MdDelete } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { CiEdit } from "react-icons/ci";
import useMenu from "../../Hooks/useMenu";
import useAxiosPublic, { axiosPublic } from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const ManageItems = () => {
      const axiosSecure = useAxiosSecure();
      // const axiosPublic=useAxiosPublic();
      const [menu,refetch] = useMenu();


         const handleDelete = (_id) => {
           Swal.fire({
             title: "Are you sure?",
             text: "You won't be able to revert this!",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, delete it!",
           }).then(async(result) => {
             if (result.isConfirmed) {
              const res= await axiosSecure.delete(`/menu/${_id}`);

                 console.log(res.data);

                 if(res.data.deletedCount>0){
                   Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                   });
                   refetch();
                 }
             }
           });
         };


   return (
     <>
       <SectionTitle heading={"manage items"} subHeading={"Hurry Up"} />
       <div className="my-5 bg-slate-100 p-10 w-5/6 mx-auto">
         <h1 className="lg:text-2xl font-semibold text-base">
           TOTAL ITEMS: {menu?.length}
         </h1>
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
                 <th>ACTION</th>
               </tr>
             </thead>
             <tbody>
               {/* Table Rows */}
               {menu?.map((item, index) => (
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
                   <td>
                    <Link to={`/dashboard/update-items/${item._id}`}>
                     <CiEdit
                       size={30}
                       className="text-white bg-[#D1A054] p-2 rounded cursor-pointer"
                     /></Link>
                   </td>
                   <td onClick={() => handleDelete(item?._id)}>
                     <MdDelete
                       size={30}
                       className="text-white bg-red-600 p-2 rounded cursor-pointer"
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
}
export default ManageItems;