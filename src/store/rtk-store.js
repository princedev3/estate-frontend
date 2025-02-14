import { productApi } from "@/app/apis/_index.product.api";
import { userApi } from "@/app/apis/_index.user.apis";
import { chatApi } from "../app/apis/_index.chat.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(productApi.middleware)
      .concat(chatApi.middleware),
});

export const selectState = store.getState;
export const dispatchAction = store.dispatch;
