import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // Response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;

      // Log out user and redirect if unauthorized
      if (status === 401 || status === 403) {
        // await logout();
        // navigate("/login");
      }

      return Promise.reject(error); // Return full error object
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
