import { useContext } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";

const useAuth = () => {
    const auth=useContext(AuthContaxt)
    return auth;
}
export default useAuth;