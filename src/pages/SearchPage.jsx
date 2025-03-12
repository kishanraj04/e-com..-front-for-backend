import React from "react";
import { useLazySearchProductQuery } from "../../api/apiCallingForProduct";
import { data, useLocation } from "react-router";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { useSelector } from "react-redux";
import Card3 from "../components/card/Card3";
import NotFound from "../components/productnot found/NotFound";

function SearchPage() {
  const { state } = useLocation();

  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);

  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  const searchData = state?.data?.data;
  return (
    <>
    {
      !searchData?<NotFound/> :  <div className="w-[100%]">

      <div className="w-[100%] flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-3 w-[98%]">
          {searchData &&
            searchData.map((product, idx) => (
              <Card3
                key={idx}
                item={product}
                allCartItem={allCartItem?.cartItem}
              />
            ))}
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default SearchPage;
