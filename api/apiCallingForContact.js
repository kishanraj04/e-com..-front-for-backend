import apiSlice from "./commonApiSlice";  

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
      invalidatesTags: ['deliveryAddress'],  
    }),

    getAllDeliveryAddress: builder.query({
      query: (uid) => ({
        url: `user/delivery-address/${uid}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ['deliveryAddress'],    
    }),

    updateDeliveryAddress: builder.mutation({
      query: (updateAddress) => ({
        url: "user/update-delivery/address",
        method: "PUT",          
        credentials: "include",
        body: updateAddress,
      }),
      invalidatesTags: ["deliveryAddress"],   
    }),

  }),
});

export const { 
  useSaveContactMutation, 
  useSaveAddressMutation, 
  useGetAllDeliveryAddressQuery, 
  useUpdateDeliveryAddressMutation 
} = apiCallingForContact;
