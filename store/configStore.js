import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { wishListReducer } from "./wishListSlice";
import { apicallingForUser } from "../api/apiCallingForUser";
import { apicallingForProduct } from "../api/apiCallingForProduct";
import { apicallingForOrder } from "../api/apiCallingForOrder";
import { authReducer } from "./authSlice";

const rootStore = configureStore({
  reducer: {
    [apicallingForUser.reducerPath]: apicallingForUser.reducer,
    [apicallingForProduct.reducerPath]: apicallingForProduct.reducer,
    [apicallingForOrder.reducerPath]: apicallingForOrder.reducer,
    cart: cartReducer,
    wishList: wishListReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apicallingForUser.middleware, apicallingForProduct.middleware,apicallingForOrder.middleware),
});

export default rootStore;
