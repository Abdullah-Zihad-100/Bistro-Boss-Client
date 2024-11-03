import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://bistro-boos-server-ten.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
