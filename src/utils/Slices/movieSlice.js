import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomimgMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addMovieTrailor: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailor,
  addPopularMovies,
  addUpcomimgMovies,
  addTopratedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
