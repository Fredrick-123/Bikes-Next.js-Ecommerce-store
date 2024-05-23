"use client";

//import  swiper react component

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from 'swiper/modules';
import Bike from "./Bike";

const PopularBikesCarousel = ({ bikes }) => {
  // console.log(bikes);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-bike-slider mb-8"
    >
      {bikes.map((bike) => {
        // console.log(bike);
        return (
          <SwiperSlide key={bike._id}>
            <Bike bike={bike} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularBikesCarousel;
