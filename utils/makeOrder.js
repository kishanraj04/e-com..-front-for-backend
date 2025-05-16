export const makeYourOrder = async(method,data)=>{
      try {
        const resp = await method(data)
 
        
      } catch (error) {
       
        
      }
}

export const getCatAndQty = async(allOrder)=>{
  const categoryTotals = {};
  allOrder?.allOrder?.forEach(order => {
    order.orderItems?.forEach(item => {
      const category = item?.category;
      const qty = item?.qty || 0;
  
      if (category) {
        if (categoryTotals[category]) {
          categoryTotals[category] += qty;
        } else {
          categoryTotals[category] = qty;
        }
      }
    });
  });
  
  const categories = [];
  const quantities = [];
  
  for (const [key, value] of Object.entries(categoryTotals)) {
    categories.push(key);
    quantities.push(value);
  }
  
  return {categories,quantities}
}