import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 mx-4 bg-opacity-80">
      <p className="py-4 text-3xl font-bold text-white">{title}</p>
      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} imagePath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
