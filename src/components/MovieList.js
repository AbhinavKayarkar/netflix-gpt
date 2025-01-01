import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-20">
      <p className="py-4 text-3xl font-bold text-white">{title}</p>
      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard imagePath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
