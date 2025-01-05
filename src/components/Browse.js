import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent.js";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomimgMovies from "../hooks/useUpcomimgMovies";
import useTopRated from "../hooks/useTopRated.js";
import { useDispatch, useSelector } from "react-redux";
import GPTSearch from "./GPTSearch.js";
import { removeSearchMovies } from "../utils/Slices/gptSlice.js";

const Browse = () => {
  const isGPTSearch = useSelector((state) => state.gpt.isGPTSearch);
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomimgMovies();
  useTopRated();

  useEffect(() => {
    dispatch(removeSearchMovies());
  }, [isGPTSearch]);

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
