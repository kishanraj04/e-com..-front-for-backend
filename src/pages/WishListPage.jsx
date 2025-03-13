import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Wishlist from "../components/wishlist/WishList";
import { useGetAllWishListItemQuery } from "../../api/apiCallingForWishList";

function WishListPage() {
  

  return (
    <>
      <Wishlist />
    </>
  );
}

export default WishListPage;
