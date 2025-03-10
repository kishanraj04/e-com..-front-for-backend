export const getCartData = (allProduct, cartData) => {
  // console.log(allProduct , cartData);
  return cartData?.cartItem?.map((item) => {
    return allProduct.find((product) => product?._id == item?.productId);
  });
};
