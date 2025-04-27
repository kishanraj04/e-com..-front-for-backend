import apiSlice from "./commonApiSlice";   // ✅ correct now

const apiCallingForContact = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveContact: builder.mutation({
      query: (body) => ({
        url: "contact/message",
        method: "POST",
        credentials: "include",
        body: body,
      }),
    }),
    saveAddress: builder.mutation({
      query: (body) => ({
        url: "user/delivery-address",
        method: "POST",
        credentials: "include",
        body: body,
      }),
    }),
    getAllDeliveryAddress:builder.query({
      query:(uid)=>({
        url:`user/delivery-address/${uid}`,
        method:"GET",
        credentials:"include"
      })
    })
  }),
});

export const { useSaveContactMutation, useSaveAddressMutation, useGetAllDeliveryAddressQuery } = apiCallingForContact;
