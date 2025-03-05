import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apicallingForProduct = createApi({
  reducerPath:'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({

    // products endpoints
    getAllProduct:builder.query({
      query:()=> 'all-product'
    }),
    getCategory:builder.query({
      query:(category)=>({
        url:`product/${category}`,
        credentials:'include'
      })
    }),
    createProduct:builder.mutation({}),
    updateProduct:builder.mutation({}),
    getSinglePorduct:builder.query({}),
    deleteSingleProduct:builder.query({}),
    searchProduct:builder.query({}),
    priceFilter:builder.query({}),
    productView:builder.query({}),
    getAllReview:builder.query({}),
    deleteReview:builder.mutation({}),


  }),                 
});

export const {useCreateProductMutation,useDeleteReviewMutation,useDeleteSingleProductQuery,useGetAllProductQuery,useGetAllReviewQuery,useGetSinglePorductQuery,usePriceFilterQuery,useProductViewQuery,useSearchProductQuery,useUpdateProductMutation,useGetCategoryQuery} = apicallingForProduct;
