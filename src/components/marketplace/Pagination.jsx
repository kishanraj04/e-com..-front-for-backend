import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";

export default function PaginationComponent() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { data: allProduct } = useGetAllProductQuery();
  const totalPage = Math.ceil((allProduct?.length || 0) / 20);

  return (
    <div className="w-full flex justify-center py-6 bg-gray-50">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={7}
        spaceBetween={16}
        navigation
        modules={[Navigation]}
        className="w-full max-w-5xl"
      >
        {Array.from({ length: totalPage }, (_, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => alert(`Go to Page ${i + 1}`)}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-blue-600 hover:text-white text-gray-700 font-medium shadow-sm transition duration-200 cursor-pointer"
            >
              {i + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
