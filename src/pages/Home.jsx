import React, { useContext, useEffect } from "react";
import Banner from "../components/banner/Banner.jsx";
import CategorySection from "../components/categorysection/CategorySection.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetAllProductQuery } from "../../api/apiCallingForProduct.js";
import { getRandomData } from "../../utils/getRandomData.js";
import Card2 from "../components/card/Card2.jsx";
import Card3 from "../components/card/Card3.jsx";
import Card4 from "../components/card/Card4.jsx";
import Card1 from "../components/card/Card1.jsx";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart.js";
import { GlobalContect } from "../context/globalContect.jsx";
import CheckBox from "../components/filter/CheckBox.jsx";
import { CiFilter } from "react-icons/ci";
import CheckBoxForPrice from "../components/filter/CheckBoxForPrice.jsx";

function Home() {
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { filterToggle, catFilter, setCatFilter, priceRange, setPriceRange } =
    useContext(GlobalContect);
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  const category = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const priceRanges = [
    { title: "Rs. 99 and below", price: 99 },
    { title: "Rs. 100-199", price: 199 },
    { title: "Rs. 200-399", price: 399 },
    { title: "Rs. 400-699", price: 699 },
    { title: "Rs. 700-999", price: 999 },
    { title: "Rs. 1000 and above", price: 1000 },
  ];
  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  // console.log(priceRange);
  return (
    <>
      {/* banner */}
      <Banner />

      {/* category section*/}
      <CategorySection />

      <div className="relative">
        <div className="w-[100%] p-4">
          <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
            <h1>Best Seller</h1>
          </div>

          <div className="w-full  flex justify-center">
            <div className="grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {allProduct &&
                getRandomData(allProduct, 1).map((product, idx) => (
                  <Card2
                    key={idx}
                    item={product}
                    allCartItem={allCartItem?.cartItem}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* recomended product */}
        <div className="w-[100%] p-4">
          <div>
            <h1 className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
              Recomended Product
            </h1>
          </div>

          <div className="w-[100%] flex justify-center items-center">
            <div className="grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {allProduct &&
                getRandomData(allProduct, 2).map((product, idx) => (
                  <Card3
                    key={idx}
                    item={product}
                    allCartItem={allCartItem?.cartItem}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Trending product */}
        <div className="w-[100%] p-4">
          <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
            <h1>Trending Product</h1>
          </div>

          <div className="w-[100%] flex justify-center items-center ">
            <div className="grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {allProduct &&
                getRandomData(allProduct, 3).map((product, idx) => (
                  <Card4
                    key={idx}
                    item={product}
                    allCartItem={allCartItem?.cartItem}
                  />
                ))}
            </div>
          </div>
        </div>

        {/*Trending product */}
        <div className="w-[100%] p-4">
          <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
            <h1>Limited Stock</h1>
          </div>

          <div className="w-[100%] flex justify-center items-center">
            <div className="grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {allProduct &&
                getRandomData(allProduct, 0).map((product, idx) => (
                  <Card1 key={idx} item={product} allCartItem={allCartItem} />
                ))}
            </div>
          </div>
        </div>

        {/* filter div */}
        <div
          className={`fixed top-28 right-0 h-full z-50 transition-transform duration-700 ease-in-out 
  ${
    filterToggle ? "translate-x-0" : "translate-x-full"
  } w-full sm:w-[80%] md:w-[60%] lg:w-[30%] bg-orange-200 shadow-lg`}
        >
          {/* Category Filter */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <CiFilter size={"2rem"} />
              <h1 className="font-bold text-2xl ml-2">Category</h1>
            </div>
            {category?.map((category,idx) => (
              <CheckBox
                key={idx}
                type="checkbox"
                name={category}
                title={category}
                method={setCatFilter}
              />
            ))}
          </div>

          {/* Price Filter */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <CiFilter size={"2rem"} />
              <h1 className="font-bold text-2xl ml-2">Price</h1>
            </div>
            {priceRanges?.map((range,idx) => (
              <CheckBoxForPrice
                key={idx}
                type="checkbox"
                value={range}
                method={setPriceRange}
              />
            ))}
          </div>

          {/* Apply Button */}
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white p-3 rounded-xl">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
