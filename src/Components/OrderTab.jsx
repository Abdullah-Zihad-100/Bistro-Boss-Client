import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCard from "./FoodCard";

const OrderTab = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 6;

  //  calculate total page
  const totalPage = Math.ceil(category?.length / itemPerPage);

  const pagenatedItems = category?.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );
  console.log(pagenatedItems);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handleNextPage=()=>{
    if(currentPage< totalPage -1){
setCurrentPage(currentPage+1)
    }
  }
  const handlePreviousePage=()=>{
    if(currentPage>0){
setCurrentPage(currentPage-1)
    }
  }
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-5/6 mx-auto">
            {pagenatedItems?.map((item) => (
          <FoodCard key={item?._id} item ={item} ></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      {/* pagination control */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePreviousePage}
          disabled={currentPage === 0}
          className={`mx-2 px-4 border ${
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Previous
        </button>
        <button 
          className={`mx-2 px-4 py-2 border ${
            currentPage === totalPage - 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPage - 1}
        >
          Next
        </button>
      </div>
      <p className="text-center mt-4">
        page {currentPage+1} of {totalPage}
      </p>
    </div>
  );
};
export default OrderTab;
