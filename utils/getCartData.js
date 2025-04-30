export const getCartData = (allProduct, cartData) => {
  return cartData?.map((item) => {
    return {
      ...allProduct.find((product) => product?._id == item?.productId),
      qty: item?.qty,
    };
  });
};
