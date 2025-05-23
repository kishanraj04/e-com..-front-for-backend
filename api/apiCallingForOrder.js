import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import apiSlice from "./commonApiSlice";

export const apiCallingForOrder = apiSlice.injectEndpoints({
  reducerPath: "orderApi",
  endpoints: (builder) => ({
    orderTheProduct: builder.mutation({
      query: (data) => ({
        url: "order",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags:["Product","orders"]
    }), 
    getAllProductOrder:builder.query({
      query:()=>({
        url:'all-order',
        method:"GET",
        credentials:"include",
      }),
      providesTags:["orders"]
    })  
  }),
});

export const {
  useOrderTheProductMutation,useGetAllProductOrderQuery
} = apiCallingForOrder;
