import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import {
  useGetAllProductQuery,
  useGetPageWiseProductQuery,
} from "../../api/apiCallingForProduct";
import Card2 from "../components/card/Card2";
import Spinner from "../components/spinner/Spinner";

function MarketPlace() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [pageno, setPageno] = useState(0);
  const { data: pageData ,isLoading} = useGetPageWiseProductQuery(pageno);
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  

  const totalPages = Math.floor(allProduct?.length / 20);



  return (
   <>
   {
    isLoading?<Spinner/>: <div className="relative flex gap-5">
    <div className="w-[100%] flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-3 w-[98%]">
        {pageData?.data &&
          pageData?.data.map((product, idx) => (
            <Card2
              key={idx}
              item={product}
              allCartItem={allCartItem?.cartItem}
            />
          ))}
      </div>
    </div>

    {/* pages */}
    <div className="absolute bottom-0 right-0">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper select-none w-[30rem]"
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <SwiperSlide
            key={i}
            className={`flex justify-center items-center bg-gray-200 rounded-lg select-none text-lg font-bold shadow-md text-center ${pageno==i+1?"bg-gray-500":""}`}
            style={{ width: "100px", height: "50px" }} // Inline styles for precise control
            onClick={() => setPageno(i+1)}
          >
            {i + 1}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
   }
   </>
  );
}

export default MarketPlace;
