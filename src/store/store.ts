/* eslint-disable no-irregular-whitespace */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    authToken: authReducer,
  },
});
