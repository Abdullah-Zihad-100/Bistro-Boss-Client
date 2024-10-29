import loginImg from "../assets/others/authentication2.png";
import loginBg from "../assets/others/authentication.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const Register = () => {
  const axiosSecure=useAxiosSecure();
  const { createUser, updateUser } = useContext(AuthContaxt);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, url);

    createUser(email, password)
      .then((res) => {
        
        axiosPublic.post("/users",{email,name}).then(res=>{
          console.log(res)
          console.log("User details added");
        })
        console.log({email,name});

        Swal.fire({
          title: "Login Success",
          icon: "success",
        });
        navigate(from, { replace: true }); // Redirect after login
        console.log(res);
        updateUser(name, url)
          .then(() => {})
          .catch((error) => {});
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Login Failed",
          icon: "error",
        });
      });
  };

  //  google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        const userInfo={
          email:res?.user?.email,
          name:res?.user?.displayName
        }
        axiosPublic.post("/users",userInfo).then(res=>{
          console.log(res);
          navigate(from, { replace: true }); // Redirect after login
        })
        Swal.fire({
          title: "Google Login Success",
          icon: "success",
        });
        navigate(from, { replace: true }); // Redirect after Google login
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className="hero min-h-screen"
    >
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="hero-content flex-col  md:flex-row-reverse  px-10 rounded-md shadow-xl"
      >
        <div className="text-center flex-1 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-transparent w-full flex-1">
          <form onSubmit={handleRegister} className="card-body space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type hare"
                className="input "
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">URL</span>
              </label>
              <input
                type="url"
                placeholder="Type hare"
                className="input "
                required
                name="url"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type hare"
                className="input "
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input "
                required
                name="password"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#DAB884] text-white">
                Sign In
              </button>
            </div>
            <p className="text-center font-semibold text-[#DAB884]">
              Alreday have a account ? <Link to={"/login"}>Go to log in</Link>
            </p>
            <p className="text-center font-semibold">Or sign in with</p>
            <div className="flex gap-6 justify-center text-gray-600">
              <FaFacebook size={30} />
              <FaGoogle
                className="cursor-pointer"
                onClick={handleGoogleLogin}
                size={30}
              />
              <FaGithub size={30} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
