import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import apiSlice from "./commonApiSlice";

export const apiCallingForCart = apiSlice.injectEndpoints({
  reducerPath: "cartApi",
  endpoints: (builder) => ({
    addInCart: builder.mutation({
      query: (data) => ({
        url: "add/cart",
        method: "POST",
        credentials: "include",
        body: data
      }),
      invalidatesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation({  
      query: (pId) => ({
        url: "delete/cart",
        method: "DELETE",
        credentials: "include",
        body: pId
      }),
      invalidatesTags: ["Cart"], 
    }),

    getAllCartItem: builder.query({  
      query: (uid) => ({
        url: `all/cart/${uid}`,
        method: "GET",
        credentials: "include"
      }),
     
      providesTags:['Cart']
    }),
  }),
});

// ✅ Correct export names based on endpoint keys
export const { useAddInCartMutation, useRemoveFromCartMutation,useGetAllCartItemQuery } = apiCallingForCart;
