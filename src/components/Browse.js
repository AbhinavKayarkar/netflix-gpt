import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondComponent from "./SecondComponent";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondComponent />
    </>
  );
};

export default Browse;
