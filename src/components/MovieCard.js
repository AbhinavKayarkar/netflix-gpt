import React from "react";
import { IMAGE_URL } from "../utils/constants";
const MovieCard = ({ imagePath }) => {
  return (
    <div className="w-44 px-2">
      <img src={IMAGE_URL + imagePath} alt="movie-image" />
    </div>
  );
};

export default MovieCard;
