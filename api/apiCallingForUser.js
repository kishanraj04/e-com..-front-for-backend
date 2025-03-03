import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apicallingForUser = createApi({
  reducerPath:'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    // user specific endpoints
    loginUser: builder.mutation({
      query:(userData)=>({
        url:'signIn',
        method:"POST",
        body:userData,
        credentials: 'include'
      })
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
      })
    }),
    logOutUser:builder.mutation({
      query:()=>({
        url:'logout-user',
        method:"POST",
        credentials:'include'
      })
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
