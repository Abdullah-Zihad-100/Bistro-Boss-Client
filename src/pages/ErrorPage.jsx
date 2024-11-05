import { Link } from "react-router-dom";
import errorImg from "../../src/assets/404.gif"
const ErrorPage = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <img src={errorImg} alt="" />
        <Link to={"/"}>
          <button className="btn-grad">
            <div className="flex items-center gap-2">Back Home</div>
          </button>
        </Link>
      </div>
    );
}
export default ErrorPage;