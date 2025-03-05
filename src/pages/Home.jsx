import React, { useEffect } from "react";
import Banner from "../components/banner/Banner.jsx";
import CategorySection from "../components/categorysection/CategorySection.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetAllProductQuery } from "../../api/apiCallingForProduct.js";
import { saveAllProduct } from "../../store/productSlice.js";
import { getRandomData } from "../../utils/getRandomData.js";
import Card2 from "../components/card/Card2.jsx";
import Card3 from "../components/card/Card3.jsx";
import Card4 from "../components/card/Card4.jsx";
import Card1 from "../components/card/Card1.jsx";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedInUserStatus = useSelector((state) => state.auth.isLoggedIn);
  const { data, isError, isLoading, isSuccess } = useGetAllProductQuery();
  useEffect(() => {
    if (isSuccess) dispatch(saveAllProduct({ data: data }));
    if (isLoggedInUserStatus == false) {
      navigate("/");
    }
  }, [data, isError]);
  const allProduct = useSelector((state) => state.product.allProduct.product);

  return (
    <>
      {/* banner */}
      <Banner />

      {/* category section*/}
      <CategorySection />

      {/*  */}
      <div className="w-[100%]">
        <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
          <h1>Best Seller</h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {allProduct &&
              getRandomData(allProduct, 1).map((product, idx) => (
                <Card2 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>

      {/* recomended product */}
      <div className="w-[100%]">
        <div>
          <h1 className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">Recomended Product</h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {allProduct &&
              getRandomData(allProduct, 2).map((product, idx) => (
                <Card3 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>


       {/*Trending product */}
       <div className="w-[100%]">
        <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
          <h1>Trending Product</h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {allProduct &&
              getRandomData(allProduct, 3).map((product, idx) => (
                <Card4 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>


      {/*Trending product */}
      <div className="w-[100%]">
        <div className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
          <h1>Limited Stock</h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {allProduct &&
              getRandomData(allProduct, 0).map((product, idx) => (
                <Card1 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Home;
