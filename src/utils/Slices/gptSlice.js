import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isGPTSearch: false,
    searchMovies: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.isGPTSearch = !state.isGPTSearch;
    },
    addSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { toggleGPTSearch, addSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
