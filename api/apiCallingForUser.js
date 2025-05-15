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
      }),
      invalidatesTags:["User"]
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
    getAllUser:builder.query({
      query:()=>({
        url:'all-user',
        method:"GET",
        credentials:"include"
      }),
      providesTags:["User"]
    }),
    getSinglUser:builder.query({}),
    changeUserRole:builder.mutation({}),
    deleteUser:builder.mutation({
      query:(id)=>({
        url:`delete/user/${id}`,
        method:"DELETE",
        credentials:"include"
      }),
      invalidatesTags:["User"]
    }),
    updateSingleUserData:builder.mutation({
      query:(data)=>({
        url:"user/update/single",
        method:"PUT",
        body:data,
        credentials:"include"
      }),
      invalidatesTags:["User"]
    }),
    getRegisterUserInThisWeek:builder.query({
      query:()=>({
        url:'user/this-week',
        method:"GET",
        credentials:"include"
      }),
      providesTags:['User']
    }),
    getTodayRegisterUser:builder.query({
      query:()=>({
        url:'user/register-today',
        method:"GET",
        credentials:"include"
      }),
      providesTags:["User"]
    })
  }),
});

export const {useLoginUserMutation,useLogOutUserMutation,useSingnUpUserMutation,useDirectLoginUserQuery,useGetAllUserQuery,useGetMyProfileQuery,useChangeUserRoleMutation,useDeleteUserMutation,useGetSinglUserQuery,useUpdateSingleUserDataMutation,useGetRegisterUserInThisWeekQuery,useGetTodayRegisterUserQuery } = apicallingForUser;
