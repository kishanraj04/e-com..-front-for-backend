import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  tagTypes: ["Product", "Cart","User","wishList","deliveryAddress","orders","more_prod"], // Tags shared across all endpoints
  endpoints: () => ({}), // Endpoints will be injected separately
});

export default apiSlice;
