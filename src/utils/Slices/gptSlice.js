import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isGPTSearch: false,
    searchMovie: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.isGPTSearch = !state.isGPTSearch;
    },
    addSearchMovies: (state, action) => {
      state.searchMovie = action.payload;
    },
    removeSearchMovies: (state ) => {
      state.searchMovie = []
    }
  },
});

export const { toggleGPTSearch, addSearchMovies, removeSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
