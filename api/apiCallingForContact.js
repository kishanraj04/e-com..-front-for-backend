import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import apiSlice from "./commonApiSlice";

const apiCallinForContact = apiSlice.injectEndpoints({
    reducerPath:'contact',
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:3000/api/v1/"}),
    endpoints:(builder)=>({
        saveContact:builder.mutation({
            query:(body)=>({
                url:'contact/message',
                method:"POST",
                credentials:"include",
                body:body
            })
        })
    })
})

export const {useSaveContactMutation} = apiCallinForContact