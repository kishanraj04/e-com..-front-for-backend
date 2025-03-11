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
        url: `delete/cart/${pId}`,
        method: "DELETE",
        credentials: "include"
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

    increaseItemQty : builder.mutation({
      query : (pid)=>({
        url:`increase/cart/${pid}`,
        method:"PUT",
        credentials:"include"
      }),
      invalidatesTags:["Cart"]
    }),

    decreaseItemQty : builder.mutation({
      query : (pid)=>({
        url:`decrease/cart/${pid}`,
        method:"PUT",
        credentials:"include"
      }),
      invalidatesTags:["Cart"]
    })
  }),
});

// ✅ Correct export names based on endpoint keys
export const { useAddInCartMutation, useRemoveFromCartMutation,useGetAllCartItemQuery,useIncreaseItemQtyMutation,useDecreaseItemQtyMutation } = apiCallingForCart;
