import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
  const bannerImage = [
    "../../../public/images/img1.jpg",
    "../../../public/images/img2.jpg",
    "../../../public/images/img3.jpg",
    "../../../public/images/img4.jpg",
    "../../../public/images/img5.jpg",
    "../../../public/images/img6.jpg",
    "../../../public/images/img7.jpg",
  ];

  return (
    <>
      <div className="w-[100%] flex justify-center">
       <Swiper
          loop="true"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-[95%]"
        >
        
          {bannerImage.map((imagePath, idx) => (
            <SwiperSlide key={idx} className="w-[100%] h-full mt-5">
              <img
                src={imagePath}
                alt={imagePath}
                className="w-[100%] h-[15rem]"
              />
            </SwiperSlide>
          ))}
        
        </Swiper>
        </div>
    </>
  );
}
