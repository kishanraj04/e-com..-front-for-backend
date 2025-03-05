import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useGetCategoryQuery, useGetSinglePorductQuery } from "../../api/apiCallingForProduct";
import { useDispatch, useSelector } from "react-redux";
import { saveCategoryProduct, setSingleProduct } from "../../store/productSlice";
import Card3 from "../components/card/Card3";

function DetailedPage() {
  const { state } = useLocation();
  const { data, isSuccess, isError, isLoading } =
  useGetSinglePorductQuery(state);
  const category = data?.product?.category
  const { data: categoryData, isSuccess:catSuccess, isLoading:catLoading } = useGetCategoryQuery(category);

  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.singleProduct);
  const [imageNumber, setImageNumber] = useState(0);
  const categoryDataValues = useSelector((state)=>state.product.categoryData)
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setSingleProduct({ data: data.product }));
      dispatch(saveCategoryProduct({data:categoryData.data}))
    }
  }, [data, isSuccess, dispatch,categoryData]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container mx-auto p-8 flex flex-col md:flex-row gap-10 select-none">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <img
              src={singleProduct?.images?.[imageNumber]}
              alt={singleProduct?.title}
              className="w-full h-[25rem] rounded-lg shadow-md"
            />
            <div className="flex gap-4 mt-4 justify-center">
              {singleProduct?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className="w-24 h-24 object-cover cursor-pointer border border-gray-200 hover:border-gray-600 rounded-md"
                  onClick={() => setImageNumber(index)}
                />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold">{singleProduct?.title}</h1>
            <p className="text-xl text-gray-600 mt-2">
              {Math.floor(singleProduct?.price)}
            </p>
            <p className="text-gray-500 mt-4">{singleProduct?.description}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>{singleProduct?.stock}</li>
              <li>{singleProduct?.returnPolicy}</li>
              <li>{singleProduct?.shipping}</li>
              <li>{singleProduct?.warranty}</li>
              <li>Weight: {singleProduct?.weight}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-pink-600">
                Add to Cart 🛒
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-md shadow-md hover:bg-gray-100">
                Add to Wishlist ❤️
              </button>
            </div>
            <p className="text-gray-500 mt-6">SKU: {singleProduct?.sku}</p>
            <p className="text-gray-500">
              Categories: {singleProduct?.category}
            </p>
          </div>
        </div>
      )}

      <div className="w-[100%]">
        <div>
          <h1 className="text-2xl font-sans font-bold px-10 mt-[5%] mb-[2%] select-none">
            {category}
          </h1>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3 w-[98%]">
            {categoryDataValues &&
             categoryDataValues?.map((product, idx) => (
                <Card3 key={idx} item={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedPage;
