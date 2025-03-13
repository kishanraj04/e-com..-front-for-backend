export const getCartData = (allProduct, cartData) => {
  console.log("AP ", allProduct, "cd ", cartData);
  return cartData?.map((item) => {
    return {
      ...allProduct.find((product) => product?._id == item?.productId),
      qty: item?.qty,
    };
  });
};
