import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apicallingForProduct = createApi({
  reducerPath:'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({

    // products endpoints
    getAllProduct:builder.query({
      query:()=> '/products'
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

export const {useCreateProductMutation,useDeleteReviewMutation,useDeleteSingleProductQuery,useGetAllProductQuery,useGetAllReviewQuery,useGetSinglePorductQuery,usePriceFilterQuery,useProductViewQuery,useSearchProductQuery,useUpdateProductMutation} = apicallingForProduct;
