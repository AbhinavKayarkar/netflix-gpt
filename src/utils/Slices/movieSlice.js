import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailor: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailor } = movieSlice.actions;
export default movieSlice.reducer;
