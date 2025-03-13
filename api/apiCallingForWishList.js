import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import apiSlice from "./commonApiSlice";

const apiCallingForWishList = apiSlice.injectEndpoints({
    reducerPath:"wishList",
    endpoints:(builder)=>({

        addWishListItem:builder.mutation({
            query:(body)=>({
                url:'wish-list/add',
                method:"POST",
                credentials:"include"
            })
        })

    })
})

export const {useAddWishListItemMutation} = apiCallingForWishList