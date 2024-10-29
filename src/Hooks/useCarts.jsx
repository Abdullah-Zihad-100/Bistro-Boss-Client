import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
  // tans stack query
  const axiosSecure=useAxiosSecure();
  const {user}=useAuth();
  const email=user?.email;
  const { refetch,data: carts=[] } = useQuery({
    queryKey: ["carts",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${email}`);
      return res.data;
    },
  });

  return [carts,refetch];
};
export default useCarts;
