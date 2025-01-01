import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/Slices/userSlice";
import movieReducer from "../utils/Slices/movieSlice";
import gptReducer from "../utils/Slices/gptSlice";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});
