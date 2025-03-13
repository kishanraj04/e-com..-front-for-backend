import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import apiSlice from "./commonApiSlice";

const apiCallingForWishList = apiSlice.injectEndpoints({
    reducerPath:"wishList",
    endpoints:(builder)=>({

        addWishListItem:builder.mutation({
            query:(data)=>({
                url:'wish-list/add',
                method:"POST",
               
                credentials:"include",
                body:data,
                
            }),
            invalidatesTags:["wishList"]
        }),

        getAllWishListItem:builder.query({
            query:()=>({
                url:"wish-list/data",
                method:"GET",
                credentials:'include'
            }),
            providesTags:["wishList"]
        })

    })
})

export const {useAddWishListItemMutation,useGetAllWishListItemQuery} = apiCallingForWishList