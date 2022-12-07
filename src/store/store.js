import { configureStore } from "@reduxjs/toolkit";
import APIService from "./service/APIService";
import AuthSlicer from "./slicer/AuthSlicer";

export const store = configureStore({
  reducer: {
    [APIService.reducerPath]: APIService.reducer,
    auth: AuthSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIService.middleware),
});
