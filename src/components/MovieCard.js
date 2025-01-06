import React from "react";
import { IMAGE_URL } from "../utils/constants";
const MovieCard = ({ imagePath }) => {
  if (!imagePath) return;
  return (
    <div className="w-36 pr-4">
      <img src={IMAGE_URL + imagePath} alt="movie-image" />
    </div>
  );
};

export default MovieCard;
