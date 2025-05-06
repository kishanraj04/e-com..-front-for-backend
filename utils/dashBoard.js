export const getStockForCat = (allProduct,category)=>{
     let stock =0;
     let totalStock = []
     category && category.map((cat,idx)=>{
        const totals =allProduct && allProduct.filter((prod)=>prod.category==cat).map((item)=>item.stock).reduce((acc, curr) => acc + curr, 0)
        totalStock[idx] = totals
     })

     return totalStock
}