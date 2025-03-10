import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetCategoryQuery } from "../../api/apiCallingForProduct";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Card1 from "../components/card/Card1";

function CategoryPage() {
  // const { state } = useLocation(); // Get category from navigation state
  // const dispatch = useDispatch();
  // const { data, error, isLoading, isSuccess } = useGetCategoryQuery(state);
  // const categoryData = useSelector((state) => state.product.categoryData.data);

  
  // useEffect(() => {
  //   if (isSuccess && data) {
  //     console.log("dispatching data to Redux");
  //     dispatch(saveCategoryProduct({ data: data }));
  //   }
  // }, [isSuccess, data]);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return toast.error(error.message);

  return (
    
      <div className="flex flex-wrap gap-5 justify-center items-center  w-full bg-red-100 p-4">
      {/* {categoryData?.map((product,idx) => (
         <Card1 key={idx} item={product}/>
        ))}     */}
        hii
      </div>
    
  );
}

export default CategoryPage;
