import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/Slices/userSlice";
import movieReducer from "../utils/Slices/movieSlice";
import gptReducer from "../utils/Slices/gptSlice";
import configReducer from "../utils/Slices/configSlice";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
