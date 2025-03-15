export function findImageName(imagePath)
{
    // Use a regular expression to extract the filename without extension
  const regex = /([^/]+)(?=\.\w+$)/;
  const match = imagePath.match(regex);

  // Return the matched filename or an empty string if no match is found
  return match ? match[0] : '';
}

export function findDataUsingIdAndTitle(dataList,payload)
{
  const dataObject = dataList.find((item)=>item.id==payload.id && item.title.toLowerCase()==payload.title.toLowerCase())
  return dataObject
}


export function findIndexValue(data,id)
{
  return data.findIndex((item)=>item?.id==id)
}

export function isExisting(data,id)
{
  console.log("da ",data , id);
  if(!data || !id){
    return false
  }
  return data.some((item)=>item?.productId==id)
}


export function totalPrice(allCartItem){
  let total = 0
  allCartItem?.cartItem?.forEach(element => {
    total+=(element?.qty*element?.price)
  });
  return Math.floor(total)
}