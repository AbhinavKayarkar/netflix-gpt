import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent.js";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomimgMovies from "../hooks/useUpcomimgMovies";
import useTopRated from "../hooks/useTopRated.js";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomimgMovies();
  useTopRated();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </>
  );
};

export default Browse;
