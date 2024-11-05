import { MdFoodBank } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);

  const name = user?.displayName;
  const email = user?.email;
  const onSubmit = async (data) => {
    const review = { ...data, rating, name,email };
    axiosSecure.post("/reviews", review).then((res) => {
      console.log(res.data);

       if (res.data.insertedId) {
         // show success msg
         Swal.fire({
           title: "Add Review Success",
           icon: "success",
         });
       }
       

    });
  };

  return (
    <div>
      <SectionTitle heading={"ADD REVIEW"} subHeading={"Review Here"} />

      <div className="bg-gray-100  md:w-5/6 mx-auto p-8 rounded-lg">
        <h2 className="text-center text-2xl font-semibold my-4">Rate US!</h2>

        <div className="flex justify-center mb-4">
          <Rating
            style={{ maxWidth: 230 }}
            value={rating}
            onChange={setRating}
            isRequired
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-semibold">
                Which recipe you liked most?
              </span>
            </div>
            <input
              required
              {...register("name")}
              type="text"
              placeholder="Enter Recipe Name"
              className="input w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-semibold">
                Do you have any suggestion for us?
              </span>
            </div>
            <input
              required
              {...register("suggestion")}
              type="text"
              placeholder="Enter Here"
              className="input w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-semibold">
                Kindly express your care in a short way.
              </span>
            </div>
            <textarea
              required
              {...register("details")}
              className="textarea"
              placeholder="Enter Recipe Details"
            ></textarea>
          </label>

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
export default AddReview;
