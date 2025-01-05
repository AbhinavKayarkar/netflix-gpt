import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const movieArray = useSelector((state) => state.gpt.searchMovie);
  if (!movieArray) return;
  return (
    <div className=" w-full h-50%">
      <div className="bg-black bg-opacity-70 mt-14">
        <MovieList title="" movies={movieArray} />
      </div>
    </div>
  );
};

export default GPTSuggestions;
