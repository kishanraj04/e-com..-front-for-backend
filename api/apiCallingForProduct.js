import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiSlice from "./commonApiSlice";

export const apicallingForProduct = apiSlice.injectEndpoints({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Content-Type','multipart/form-data')
    //   return headers;
    // }
  }),
  endpoints: (builder) => ({
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
    deleteSingleProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["more_prod"],
    }),
    searchProduct: builder.query({
      query: (productname) => ({
        url: `product/search/${productname}`,
        method: "GET",
        credentials: "include",
      }),
      invalidatesTags: ["Product"],
    }),
    priceFilter: builder.query({}),
    productView: builder.query({}),
    getAllReview: builder.query({}),
    deleteReview: builder.mutation({}),
    showMoreProd: builder.query({
      query: (range) => ({
        url: `product/showmore/${range}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["more_prod"],
    }),
    addNewProduct: builder.mutation({
      query: (body) => ({
        url: "create/product",
        method: "POST",
        credentials: "include",
        body: body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteReviewMutation,
  useDeleteSingleProductMutation,
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
  useShowMoreProdQuery,
  useAddNewProductMutation,
} = apicallingForProduct;
