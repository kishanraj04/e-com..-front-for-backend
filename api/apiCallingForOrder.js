import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apicallingForOrder = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({

    // order specific endpoints
    orderProduct:builder.mutation({}),
    getAllOrder:builder.query({}),
    getSingleProduct:builder.query({}),
    getMyOrder:builder.query({}),
    updateShipp:builder.mutation({})

  }),
});

export const {useGetAllOrderQuery,useGetMyOrderQuery,useGetSingleProductQuery,useOrderProductMutation,useUpdateShippMutation} = apicallingForOrder;
