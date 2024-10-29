import Cover from "./Shared/Cover";
import ContactImg from "../assets/contact/banner.jpg";
import SectionTitle from "../Components/SectionTitle";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Cover
        coverImg={ContactImg}
        heading={"Contact Now"}
        subHeading={"Lorem Ipsum has been the industry"}
      />
      <div>
        <SectionTitle heading={"OUR LOCATION"} subHeading={"Visit Us"} />
        <div className="lg:flex-row flex flex-col gap-5 m-2 justify-center w-5/6 mx-auto">
          <div className="w-full ">
            <div className="bg-[#D1A054] text-white px-5 py-3 flex justify-center">
              <FaPhoneAlt size={20} />
            </div>
            <div className="p-3 border">
              <div className="bg-gray-100 w-full h-full text-center px-10 py-5 -mt-3">
                <h3 className=" font-bold m-3">PHONE</h3>
                <p className="text-sm">+38 498494 447478</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#D1A054] text-white px-5 py-3 flex justify-center">
              <FaLocationDot size={20} />
            </div>
            <div className="p-3 border">
              <div className="bg-gray-100 w-full h-full text-center px-10 py-5 -mt-3">
                <h3 className=" font-bold m-3">ADDRESS</h3>
                <p className="text-sm">DHAKA BANGLADESH</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#D1A054] text-white px-5 py-3 flex justify-center">
              <IoIosTime size={20} />
            </div>
            <div className="p-3 border">
              <div className="bg-gray-100 w-full h-full text-center px-10 py-5 -mt-3">
                <h3 className=" font-bold m-3">WORKING HOURS</h3>
                <p className="text-sm">
                  Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle heading={"CONTACT FORM"} subHeading={"Send Us a Message"} />
      <div className="hero min-h-screen">
        <div className="hero-content bg-gray-100 w-full">
          <div className="card w-full">
            <form className="card-body space-y-3">
              <div className="flex gap-5">
                <div className="form-control flex-1">
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
                <div className="form-control flex-1">
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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Number*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your number"
                  className="input "
                  required
                  name="number"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message*</span>
                </label>
                <textarea
                  rows={"8"}
                  placeholder="Enter your message"
                  className="rounded-md p-3 outline-none"
                  required
                  name="message"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#ca9442] text-white mx-auto"
                >
                  <div className="flex gap-1 items-center">
                    Send Message <FaTelegramPlane />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
