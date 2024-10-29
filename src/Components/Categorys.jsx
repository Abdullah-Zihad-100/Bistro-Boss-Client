import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img4 from "../assets/home/slide4.jpg"
import img5 from "../assets/home/slide5.jpg"
import SectionTitle from "./SectionTitle";

const Categorys = () => {
  return (
    <div className="py-10 w-5/6 mx-auto">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />{" "}
          <h4 className="text-xl -mt-12 text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}></img>
          <h4 className="text-xl -mt-12 text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h4 className="text-xl -mt-12 text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h4 className="text-xl -mt-12 text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            Desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h4 className="text-xl -mt-12 text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Categorys;
