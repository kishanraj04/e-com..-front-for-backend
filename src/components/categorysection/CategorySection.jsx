import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

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

const basePath = "/categoryImage/";

const formattedCategories = categoryImage.map((image) => ({
  image: basePath + image,
  path: image.replace(/\.(jpg|png)$/, ""),
}));

function CategorySection() {
  return (
    <div className="mt-10 p-3">
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold underline decoration-green-500 font-serif">
          Our Different Categories
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1280: { slidesPerView: 6, spaceBetween: 25 },
        }}
        modules={[Pagination]}
        // pagination={{ clickable: true }}
        className="w-full px-4"
      >
        {formattedCategories.map(({ image, path }, idx) => (
          <SwiperSlide key={idx}>
            <Link to={`/home/category/${path}`} state={path}>
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center">
                <img
                  src={image}
                  alt={path}
                  className="w-32 h-32 object-contain mb-2"
                />
                <span className="text-lg font-semibold capitalize">{path.replace(/-/g, " ")}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySection;
