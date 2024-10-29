import loginImg from "../assets/others/authentication2.png";
import loginBg from "../assets/others/authentication.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { axiosPublic } from "../Hooks/useAxiosPublic";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { loginUser, googleLogin } = useContext(AuthContaxt);

  // State to handle captcha input and disabled button
  const [captchaValue, setCaptchaValue] = useState(""); // Captures user input for captcha
  const [isCaptchaValid, setIsCaptchaValid] = useState(false); // Determines if captcha is valid
  const [disable, setDisable] = useState(true); // Disables button until captcha is verified

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        Swal.fire({
          title: "Login Success",
          icon: "success",
        });
        navigate(from, { replace: true }); // Redirect after login
      })
      .catch((err) =>{
  Swal.fire({
    title: "Login Faild",
    text:"email password not match",
    icon: "error",
  });
       console.log(err)
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res);
          navigate(from, { replace: true }); // Redirect after login
        });
        Swal.fire({
          title: "Google Login Success",
          icon: "success",
        });
        navigate(from, { replace: true }); // Redirect after Google login
      })
      .catch((err) => console.log(err));
  };

  // Initialize captcha when component mounts
  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha with 6 characters
  }, []);

  // Handle captcha input change and verify when user clicks "Verify" button
  const handleCaptcha = () => {
    if (validateCaptcha(captchaValue)) {
      setIsCaptchaValid(true);
      setDisable(false); // Enable the submit button
     
    } else {
      setIsCaptchaValid(false);
      setDisable(true); // Disable the submit button
      Swal.fire({
        title: "Captcha Incorrect",
        icon: "error",
      });
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className="hero min-h-screen"
    >
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="hero-content flex-col md:flex-row px-10 rounded-md shadow-xl"
      >
        <div className="text-center flex-1 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-transparent w-full flex-1">
          <form onSubmit={handleLogin} className="card-body space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input"
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
                className="input"
                required
                name="password"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="Enter captcha"
                className="input"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)} // Update captcha value as user types
                required
              />
              <button
                type="button"
                className="btn btn-xs w-2/6 btn-success mt-4 text-white"
                onClick={handleCaptcha} // Validate captcha on button click
              >
                Verify
              </button>
            </div>

            <div className="form-control mt-6">
              <button
                disabled={disable}
                type="submit"
                className="btn bg-[#DAB884] text-white"
              >
                Sign in
              </button>
            </div>
            <p className="text-center font-semibold text-[#DAB884]">
              New here? <Link to={"/register"}>Create an Account</Link>
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

export default Login;
