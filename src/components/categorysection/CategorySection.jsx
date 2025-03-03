import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function CategorySection() {
    const categoryImage = [
        "beauty.jpg",
        "fragrances.png",
        "groceries.png",
        "home-decoration.jpg",
        "kitchen-accessories.jpg",
        "laptops.jpg",
        "mens-shirts.jpg",
        "mens-shoes.jpg",
        "mens-watches.jpg",
        "mobile-accessories.jpg",
        "motorcycle.jpg",
        "skin-care.jpg",
        "smartphones.jpg",
        "sports-accessories.png",
        "sunglasses.png",
        "tablets.jpg",
        "tops.jpg",
        "vehicle.jpg",
        "womens-dresses.png",
        "womens-jewellery.jpg",
        "womens-shoes.jpg",
    ];
    
    const basePath = "../../../public/categoryImage/";
    
    const formattedCategories = categoryImage.map(image => {
        return {
            image: basePath + image,
            path: image.replace(/\.(jpg|png)$/, "") 
        };
    });
    
    
    
  return (
    <div className="mt-[5%]  h-[20rem] ">
      <div className="w-full flex justify-center items-center p-10">
        <h1 className="text-3xl font-bold font-serif underline decoration-green-500">
          Our Different Category
        </h1>
      </div>

      {/* swipper */}
      <div className="h-[15rem] w-full select-none">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {formattedCategories.map(({image, path},idx) => (
            <SwiperSlide key={idx} className="hover:border-[1px] border-black-500 duration-500 ease-in-out shadow-md">
              {
                <Link to={path}>
                  <div className="h-[10rem] flex flex-col gap-2 justify-center items-center">
                    <div className="h-[7rem] w-[8rem]">
                      <img
                        src={image}
                        alt={path}
                        className="h-[8rem] w-[8rem]"
                      />
                    </div>

                    {/* content */}
                    <div>
                      {
                        <span className="font-bold text-xl">
                          {path}
                        </span>
                      }
                    </div>
                  </div>
                </Link>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategorySection;
