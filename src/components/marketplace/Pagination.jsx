import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct"; // Ensure correct import path

export default function PaginationComponent() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { data: allProduct } = useGetAllProductQuery();
  const totalPage = Math.ceil((allProduct?.length || 0) / 20); // Handle undefined data

  return (
    <div className="w-full flex flex-col items-center">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5} // Show 3 slides at a time
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[400px] max-w-2xl h-[40px]" // Set Swiper height and width
      >
        {/* Generate slides dynamically based on totalPage */}
        {Array.from({ length: totalPage }, (_, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-center items-center bg-gray-200 rounded-lg select-none text-lg font-bold shadow-md"
            style={{ width: "200px", height: "150px" }} // Inline styles for precise control
            onClick={() => alert(`Page ${i + 1}`)}
          >
             <p>{i + 1}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
