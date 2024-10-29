import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { MdFoodBank } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const imageB_hosting_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageB_hosting_key}`;

const UpdateItems = () => {

    const {_id,recipe,price,name,category,image}=useLoaderData();

     const axiosPublic = useAxiosPublic();
     const axiosSecure = useAxiosSecure();
     const { register, handleSubmit } = useForm();
     const onSubmit = async (data) => {
       console.log(data);
       // image uplord imagebb and get an url
       const imgFile = { image: data.image[0] };
       const res = await axiosPublic.post(image_hosting_api, imgFile, {
         headers: {
           "content-type": "multipart/form-data",
         },
       });
       if (res.data.success) {
         // now send the menu item data to the server with the image
         const menuItem = {
           name: data.name,
           price: parseFloat(data.price),
           recipe: data.details,
           category: data.category,
           image: res.data.data.display_url,
           //
         };
         const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
         if (menuRes.data.modifiedCount) {
           // show success msg
           Swal.fire({
             title: "Update Item Success",
             icon: "success",
           });
         }
         console.log(menuRes.data);
       }
     };


  return (
    <div>
      <SectionTitle heading={"Add an item"} subHeading={"What's new"} />

      <div className="bg-gray-100  md:w-5/6 mx-auto p-8 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-semibold">
                Recipe Name*
              </span>
            </div>
            <input
            defaultValue={name}
              required
              {...register("name")}
              type="text"
              placeholder="Enter Name"
              className="input w-full"
            />
          </label>

          <div className="flex gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-semibold">
                  Category*
                </span>
              </div>

              <select
                required
                defaultValue={category}
                {...register("category")}
                className="select select-bordered border-none"
              >
                <option disabled value={""}>
                  Pick one
                </option>
                <option value={"salad"}>Salda</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"suop"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-semibold">
                  Price*
                </span>
              </div>
              <input
              defaultValue={price}
                required
                {...register("price")}
                type="text"
                placeholder="Enter Price"
                className="input w-full"
              />
            </label>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-semibold">
                Recipe Details*
              </span>
            </div>
            <textarea
              required
              defaultValue={recipe}
              {...register("details")}
              className="textarea"
              placeholder="Enter Recipe Details"
            ></textarea>
          </label>

          <input
            required
            {...register("image")}
            type="file"
            className="block my-3 mx-3  rounded"
          />

          <button type="submit" className="btn-grad">
            <div className="flex items-center gap-2">
              Add item <MdFoodBank size={20} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateItems;
