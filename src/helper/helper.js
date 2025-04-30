export function findImageName(imagePath) {
  // Use a regular expression to extract the filename without extension
  const regex = /([^/]+)(?=\.\w+$)/;
  const match = imagePath.match(regex);

  // Return the matched filename or an empty string if no match is found
  return match ? match[0] : "";
}

export function findDataUsingIdAndTitle(dataList, payload) {
  const dataObject = dataList.find(
    (item) =>
      item.id == payload.id &&
      item.title.toLowerCase() == payload.title.toLowerCase()
  );
  return dataObject;
}

export function findIndexValue(data, id) {
  return data.findIndex((item) => item?.id == id);
}

export function isExisting(data, id) {
  // console.log("da ",data , id);
  if (!data || !id) {
    return false;
  }
  return data.some((item) => item?.productId == id);
}

export function totalPrice(allCartItem) {
  let total = 0;
  console.log(allCartItem?.cartItem?.cartItem);
  allCartItem?.forEach((element) => {
    total += element?.qty * element?.price;
  });
  return Math.floor(total);
}

// calculate price for oreder summary
export const priceForOrderSummary = (data) => {
  if (!Array.isArray(data)) return 0;

  const totalPrice = data.reduce((acc, item) => {
    const qty = Number(item?.qtyForOrderSummary ?? 1); // Use qtyForOrderSummary only
    const price = Number(item?.price ?? 0);
    return acc + price * qty;
  }, 0);

  console.log("Total:", totalPrice);
  return totalPrice;
};
