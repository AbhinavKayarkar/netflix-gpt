import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { useSelector } from "react-redux";
import { NETFLIX_BG_IMAGE } from "../utils/constants";

const GPTSearch = () => {
  const searchMovie = useSelector((state) => state.gpt.searchMovie);
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover"
          src={NETFLIX_BG_IMAGE}
          alt="netflix-bg-img"
        />
      </div>
      <div className="sm:pt-[25%] md:pt-0">
        <GPTSearchBar />
        {searchMovie !== null ? <GPTSuggestions /> : " "}
      </div>
    </>
  );
};

export default GPTSearch;
