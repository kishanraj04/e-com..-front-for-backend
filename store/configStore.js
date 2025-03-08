import { configureStore } from "@reduxjs/toolkit";
import { apicallingForUser } from "../api/apiCallingForUser";
import { apicallingForProduct } from "../api/apiCallingForProduct";
import { apicallingForOrder } from "../api/apiCallingForOrder";
import { authReducer } from "./authSlice";
import { apiCallingForCart } from "../api/apiCallingForCart";
import apiSlice from "../api/commonApiSlice";

const rootStore = configureStore({
  reducer: {
    [apicallingForOrder.reducerPath]: apicallingForOrder.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apicallingForUser.middleware, apicallingForProduct.middleware,apicallingForOrder.middleware,apiCallingForCart.middleware),
});

export default rootStore;
