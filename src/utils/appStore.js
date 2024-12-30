import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/Slices/userSlice";
export const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});
