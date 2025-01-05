import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { useSelector } from "react-redux";

const GPTSearch = () => {

  const searchMovie = useSelector((state) => state.gpt.searchMovie)
  return (
    <div>
      <GPTSearchBar />
      {searchMovie !== null ?  <GPTSuggestions /> : " "} 
    </div>
  );
};

export default GPTSearch;
