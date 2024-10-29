import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import comma from "../assets/home/semiComma.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-10 w-5/6 mx-auto">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="m-24 text-center">
              <Rating  className="flex flex-col items-center mx-auto "
                style={{ maxWidth: 180 }}
                value={review.rating}
              readOnly
              />
              <img src={comma} className="md:w-2/4 w-3/4 mx-auto" alt="" />
              <p>{review?.details}</p>
              <h3 className="text-2xl text-orange-500 ">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimonials;
