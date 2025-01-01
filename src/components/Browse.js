import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent.js";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomimgMovies from "../hooks/useUpcomimgMovies";
import useTopRated from "../hooks/useTopRated.js";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch.js";

const Browse = () => {
  const isGPTSearch = useSelector((state) => state.gpt.isGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomimgMovies();
  useTopRated();
  return (
    <>
      <Header />
      {!isGPTSearch ? (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      ) : (
        <GPTSearch />
      )}
    </>
  );
};

export default Browse;
