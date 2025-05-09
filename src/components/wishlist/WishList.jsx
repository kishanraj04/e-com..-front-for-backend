import React from "react";
import { Trash2 } from "lucide-react";
import { useDeleteWishListItemMutation, useGetAllWishListItemQuery } from "../../../api/apiCallingForWishList";
import { getCartData } from "../../../utils/getCartData";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";
import { handleDeleteFromWishList } from "../../../utils/handleDeleteFromWishList";

// const wishlistItems = [
//   {
//     id: 1,
//     name: "Divastri Women Kurta Pant Dupatta Set",
//     price: 436,
//     originalPrice: 2599,
//     discount: "83% off",
//     image: "https://via.placeholder.com/80",
//     unavailable: true,
//   },
//   {
//     id: 2,
//     name: "Royal Export Women Kurta Pant Dupatta Set",
//     price: "Not Available",
//     image: "https://via.placeholder.com/80",
//     unavailable: true,
//   },
//   {
//     id: 3,
//     name: "Roadster Full Sleeve Color Block Men Sweatshirt",
//     price: 640,
//     originalPrice: 1999,
//     discount: "67% off",
//     image: "https://via.placeholder.com/80",
//     unavailable: true,
//   },
//   {
//     id: 4,
//     name: "HRX by Hrithik Roshan Full Sleeve Solid Men Jacket",
//     price: 980,
//     originalPrice: 1999,
//     discount: "50% off",
//     image: "https://via.placeholder.com/80",
//     unavailable: false,
//   },
// ];

const Wishlist = () => {
  const { data: wishListData } = useGetAllWishListItemQuery();
  const { data: allProduct } = useGetAllProductQuery();

  const wishListItems = getCartData(allProduct, wishListData?.wishListData);
  const [deleteItemFromWishList,deleteWishListResp] = useDeleteWishListItemMutation()

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        My Wishlist ({wishListData?.wishListData?.length})
      </h2>
      <div className="space-y-4">
        {wishListItems && wishListItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-md font-medium">{item?.title}</h3>
              { <p className="text-sm text-blue-500">{item?.stock<=0?"wishListItems":"product available"}</p>}
              {typeof item.price === "number" ? (
                <p className="text-lg font-semibold">
                  ₹{item?.price}{" "}
                
                  <span className="text-green-600">{item?.discountPercentage}%</span>
                </p>
              ) : (
                <p className="text-sm text-gray-600">Price: {item.price}</p>
              )}
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <Trash2 size={18} onClick={() => handleDeleteFromWishList(item,deleteItemFromWishList)}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
