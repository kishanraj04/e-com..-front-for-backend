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
  return data.find((item)=>item?.id==id)
}