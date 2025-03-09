import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiSlice from "./commonApiSlice";

export const apicallingForUser = apiSlice.injectEndpoints({
  reducerPath:'userApi',
  endpoints: (builder) => ({
    // user specific endpoints
    loginUser: builder.mutation({
      query:(userData)=>({
        url:'signIn',
        method:"POST",
        body:userData,
        credentials: 'include'
      }),
      invalidatesTags:['User']
    }),
    singnUpUser: builder.mutation({
      query:(userData)=> ({
        url:'signUp',
        method:'POST',
        body:userData
      })
    }),
    directLoginUser: builder.query({
      query:()=>({
        url:"direct-login",
        method:"GET",
        credentials:'include'
      }),
      providesTags:['User']
    }),
    logOutUser:builder.mutation({
      query:()=>({
        url:'logout-user',
        method:"POST",
        credentials:'include'
      }),
      invalidatesTags:["User"]
    }),
    getMyProfile:builder.query({}),
    updateUserPassword:builder.mutation({}),
    updateUserProfile:builder.mutation({}),
    getAllUser:builder.query({}),
    getSinglUser:builder.query({}),
    changeUserRole:builder.mutation({}),
    deleteUser:builder.mutation({}),


  }),
});

export const {useLoginUserMutation,useLogOutUserMutation,useSingnUpUserMutation,useDirectLoginUserQuery,useGetAllUserQuery,useGetMyProfileQuery,useChangeUserRoleMutation,useDeleteUserMutation,useGetSinglUserQuery,use } = apicallingForUser;
