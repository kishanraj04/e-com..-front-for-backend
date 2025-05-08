import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiSlice from "./commonApiSlice";

export const apicallingForProduct = apiSlice.injectEndpoints({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    // products endpoints
    getAllProduct: builder.query({
      query: () => "all-product",
      providesTags: ["Product"],
      transformResponse: (response) => response?.product,
    }),
    getPageWiseProduct: builder.query({
      query: (no) => ({
        url: `page/limit/${no}`,
        credentials: "include",
        providesTags: ["Product"],
      }),
    }),
    getCategory: builder.query({
      query: (category) => ({
        url: `product/category/${category}`,
        credentials: "include",
      }),
    }),
    createProduct: builder.mutation({}),
    updateProduct: builder.mutation({}),
    getSinglePorduct: builder.query({
      query: (id) => ({
        url: `product/${id}`,
        credentials: "include",
      }),
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: "product/distinct/category",
        credentials: "include",
      }),
      providesTags: ["Product"],
    }),
    deleteSingleProduct: builder.query({}),
    searchProduct: builder.query({
      query: (productname) => ({
        url: `product/search/${productname}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    priceFilter: builder.query({}),
    productView: builder.query({}),
    getAllReview: builder.query({}),
    deleteReview: builder.mutation({}),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteReviewMutation,
  useDeleteSingleProductQuery,
  useGetAllProductQuery,
  useGetAllReviewQuery,
  useGetSinglePorductQuery,
  usePriceFilterQuery,
  useProductViewQuery,
  useLazySearchProductQuery,
  useUpdateProductMutation,
  useGetCategoryQuery,
  useGetPageWiseProductQuery,
  useGetAllCategoryQuery,
} = apicallingForProduct;
