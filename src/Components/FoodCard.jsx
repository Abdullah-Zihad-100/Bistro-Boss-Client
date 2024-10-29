import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import { axiosSecure } from "../Hooks/useAxiosSecure";
import useCarts from "../Hooks/useCarts";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const axiosSecure=useAxiosSecure()
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [,refetch]=useCarts();
  const cartItem = {
    menuId: item?._id,
    email: user?.email,
    name: item?.name,
    image: item?.image,
    price: item?.price,
  };
  const handleCart = () => {
    if (user && user) {
      //   fetch("http://localhost:5000/carts", {

      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(cartItem),
      //   })
      //     .then((res) => {
      //       res.json();
      //     })
      //     .then((data) => {
      //       console.log(data);
      //       Swal.fire({
      //         title: "Add Success",
      //         icon: "success",
      //       });
      //     });

      axiosSecure.post("/carts", cartItem).then((res) => {
        Swal.fire({
          title: "Add Success",
          icon: "success",
        });
        console.log(res.data);
        // refetch()
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-stone-200 shadow-xl">
      <figure>
        <p className="absolute right-0 top-0 mt-4 me-4 bg-black/80 text-white font-semibold px-3 py-1 rounded">
          {item?.price}$
        </p>
        <img
          src={item?.image}
          alt="Shoes"
          className=" object-cover w-[400px] h-[300px] rounded-t-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold">{item?.name}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions ">
          <button
            onClick={() => handleCart(item._id)}
            className="mt-4 px-4 py-3 text-yellow-600 border-b-4 border-yellow-600 bg-transparent rounded-lg hover:bg-black hover:text-yellow-600 transition-all"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
