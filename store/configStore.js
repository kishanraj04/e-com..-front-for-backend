import { configureStore } from "@reduxjs/toolkit";
import { apicallingForUser } from "../api/apiCallingForUser";
import { apicallingForProduct } from "../api/apiCallingForProduct";
// import { apicallingForOrder } from "../api/apiCallingForOrder";
import { authReducer } from "./authSlice";
import { apiCallingForCart } from "../api/apiCallingForCart";
import apiSlice from "../api/commonApiSlice";
import { globalVariableReducer } from "./globalVariableSlic";
import { apiCallingForOrder } from "../api/apiCallingForOrder";

const rootStore = configureStore({
  reducer: {
    [apiCallingForOrder.reducerPath]: apiCallingForOrder.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authReducer,
    global:globalVariableReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apicallingForUser.middleware, apicallingForProduct.middleware,apiCallingForOrder.middleware,apiCallingForCart.middleware),
});

export default rootStore;
