import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-50">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
        <MovieList title={"Upcomimg"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondComponent;
