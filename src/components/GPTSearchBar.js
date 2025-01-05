import React, { useRef } from "react";
import { MOVIE_OPTIONS, NETFLIX_BG_IMAGE } from "../utils/constants";
import { lang } from "../utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import { addSearchMovies } from "../utils/Slices/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const dispatch = useDispatch();
  const gptSearch = useRef();

  const handleMovieSearch = async (gptSearchText) => {
    console.log(gptSearchText);
    const fetchData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${gptSearchText}&include_adult=false&language=en-US&page=1`,
      MOVIE_OPTIONS
    );

    const data = await fetchData.json();
    // console.log(data.results); // returns Array
    return data.results;
  };

  async function handleGPTSearch() {
    // OPENAI integration in our project

    // const completion = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptSearch.current.value }],
    // });
    // console.log(completion?.choices[0]?.message.content);
    const output = await handleMovieSearch(gptSearch.current.value);
    dispatch(addSearchMovies(output));
  }
  return (
    <>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="netflix-bg-img" />
      </div>
      <div className="pt-[10%] px-4 w-[50%] mx-auto">
        <form
          className="bg-black p-4 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={gptSearch}
            className="py-2 px-4 col-span-9 mr-2"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="text-white bg-red-700 py-2 px-4 col-span-3"
            onClick={handleGPTSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GPTSearchBar;
